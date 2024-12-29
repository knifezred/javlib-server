import { join } from 'path'
import { AppDataSource } from '../database/data-source'
import { Actress } from '../database/entity/actress'
import { Category } from '../database/entity/category'
import { Movie } from '../database/entity/movie'
import { Storage } from '../database/entity/storage'
import {
  fsCopyFile,
  getFileExtension,
  getFileFolder,
  getFileStats,
  getPublicPath,
  listAllDirFiles,
  readFile
} from '../utils/common'

const titleRegex = /^<title>(.*?)<\/title>$/
const originalTitleRegex = /^<originaltitle>(.*?)<\/originaltitle>$/
const ratingRegex = /^<rating>(.*?)<\/rating>$/
const plotRegex = /^<plot>(.*?)<\/plot>$/
const premieredRegex = /^<premiered>(.*?)<\/premiered>$/
const tagRegex = /^<tag>(.*?)<\/tag>$/
const genreRegex = /^<genre>(.*?)<\/genre>$/
const studioRegex = /^<studio>(.*?)<\/studio>$/
const directorRegex = /^<director>(.*?)<\/director>$/
const countryRegex = /^<country>(.*?)<\/country>$/
const numRegex = /^<uniqueid.*>(.*?)<\/uniqueid>$/
const nameRegex = /^<name>(.*?)<\/name>$/
const thumbnails = join(getPublicPath(), 'thumbnails')

export async function updateMovieLibrary() {
  console.log('updateMovieLibrary start')
  const storageRepo = AppDataSource.getRepository(Storage)
  const movieRepo = AppDataSource.getRepository(Movie)
  const allMovies = await movieRepo.find()
  const addMovies: Array<Movie> = []
  console.log(`find ${allMovies.length} movies in database`)
  const tagIndex = await storageRepo.findOneBy({ key: 'tag_index' })
  let replaceTags = [] as string[]
  if (tagIndex !== null) {
    replaceTags = tagIndex.value.split('\n')
  }
  const res = await storageRepo.findOneBy({ key: 'media_folders' })
  if (res) {
    const folders = res.value.split('\n').filter(x => x.length > 0)
    listAllDirFiles(folders)
      .then(async files => {
        const promises = files
          .filter(x => x.toLowerCase().endsWith('.nfo'))
          .map(file => {
            return readNfoInfo(file, replaceTags, files)
          })
        const results = await Promise.all(promises)
        results.forEach(movieInfo => {
          const movieRes = allMovies.find(x => x.num === movieInfo.num)
          if (movieRes) {
            if (movieRes.isDelete) {
              const updateMovieEntity = {
                ...movieInfo,
                id: movieRes.id,
                isDelete: movieInfo.file.length === 0,
                favorite: movieRes.favorite,
                personalScore: movieRes.personalScore,
                viewCount: movieRes.viewCount
              } as Movie
              addMovies.push(updateMovieEntity)
            } else {
              const createMovieEntity = {
                ...movieRes,
                file: movieInfo.file,
                fileSize: movieInfo.fileSize,
                isDelete: movieInfo.file.length === 0
              } as Movie
              addMovies.push(createMovieEntity)
            }
          } else {
            const dbMovie = {
              ...movieInfo,
              isDelete: movieInfo.file.length === 0,
              favorite: false,
              personalScore: 0,
              viewCount: 0
            } as Movie
            addMovies.push(dbMovie)
          }
        })
        const childrenMovies = chunkArray(addMovies as never[], 100)
        for (const child of childrenMovies) {
          movieRepo.save(child as Array<Category>).then(saveResult => {
            console.log(`batch save movies success : ${saveResult.length}`)
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
      .then(() => {
        // 更新标签 update Tags
        const categoryRepo = AppDataSource.getRepository(Category)
        categoryRepo
          .createQueryBuilder('category')
          .where({
            type: 'tag'
          })
          .getMany()
          .then(allTags => {
            allTags.forEach(item => (item.value = 0))
            if (addMovies.length > 0) {
              console.log('update tags')
              addMovies.forEach(item => {
                item.tags
                  .split('|')
                  .filter(x => x.length > 0)
                  .forEach(tag => {
                    const category = allTags.find(x => x.key === tag)
                    if (category) {
                      category.value++
                    } else {
                      console.log('add new tag ' + tag)
                      allTags.push({
                        type: 'tag',
                        key: tag,
                        value: 1,
                        favorite: false,
                        createdTime: new Date().getTime()
                      } as never)
                    }
                  })
              })
              if (allTags.length > 0) {
                const childrenTags = chunkArray(allTags as never[], 100)
                for (const child of childrenTags) {
                  categoryRepo.save(child as Array<Category>).then(saveResult => {
                    console.log(`batch save tags success : ${saveResult.length}`)
                  })
                }
              }
            }
          })
      })
      .catch(err => {
        console.log(err)
      })
      .then(() => {
        // 更新演员
        const updateActress: Array<Actress> = []
        const actressRepo = AppDataSource.getRepository(Actress)
        actressRepo
          .find()
          .then(actressList => {
            const actressNames: string[] = []
            addMovies.forEach(movie => {
              movie.actress
                .split('|')
                .filter(x => x.length > 0)
                .forEach(actressName => {
                  if (!actressNames.includes(actressName)) {
                    actressNames.push(actressName)
                  }
                })
            })
            const actressMovies = addMovies.filter(x => x.isDelete === false)
            actressNames.forEach(actressName => {
              const actressMovie = actressMovies.find(x => x.actress.includes(`|${actressName}|`))
              if (actressMovie) {
                const actress = actressList.find(x => x.name === actressName)
                if (actress) {
                  actress.videoCount = actressMovies.filter(x => x.actress.includes(`|${actressName}|`)).length
                  actress.updatedTime = new Date().getTime()
                  actress.isDelete = false
                  updateActress.push(actress)
                } else {
                  updateActress.push({
                    createdTime: new Date().getTime(),
                    isDelete: false,
                    favorite: false,
                    score: 0,
                    personalScore: 0,
                    category: '',
                    name: actressName,
                    alias: '',
                    introduction: '',
                    avatar: actressMovie.poster,
                    cover: '',
                    tags: '',
                    birthday: '',
                    videoCount: actressMovies.filter(x => x.actress.includes(`|${actressName}|`)).length,
                    bust: 0,
                    waist: 0,
                    hip: 0,
                    face: 0,
                    body: 0,
                    cup: 0,
                    bodySize: '正常',
                    bodyHeight: 0,
                    debutDate: actressMovie.year ? actressMovie.year.toString() : new Date().getFullYear().toString()
                  })
                }
              } else {
                const tempActress = actressList.find(x => x.name === actressName)
                if (tempActress) {
                  tempActress.videoCount = 0
                  updateActress.push(tempActress)
                }
              }
            })
            return updateActress
          })
          .then(updateActressList => {
            if (updateActressList.length > 0) {
              const childrenArray = chunkArray(updateActressList as never[], 100)
              for (const child of childrenArray) {
                actressRepo.save(child as Array<Movie>).then(updateActressSaveResult => {
                  console.log(`batch update actress success : ${updateActressSaveResult.length}`)
                })
              }
            }
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
  console.log('updateMovieLibrary end')
  return addMovies.length
}

async function readNfoInfo(file: string, replaceTags: string[], files: string[]) {
  let movieInfo: DbMovie = {
    createdTime: new Date().getTime(),
    isDelete: false,
    viewCount: 0,
    favorite: false,
    personalScore: undefined,
    uniqueid: '',
    num: '',
    title: '',
    originTitle: '',
    introduction: '',
    file: '',
    torrent: '',
    cover: '',
    poster: '',
    tags: '',
    genres: '',
    studio: '',
    country: '',
    series: '',
    actress: '',
    director: '',
    year: 0,
    releaseTime: '',
    score: 0,
    fileSize: 0
  }
  try {
    console.log(`read nfo file: ${file}`)
    const data = await readFile(file)
    const lines = data.split('\n').map(line => line.trim())
    let isSet = false
    let isActor = false
    for (const line of lines) {
      if (line.startsWith('<uniqueid type="num"')) {
        movieInfo.num = getMatchContent(line, numRegex)
        movieInfo.uniqueid = movieInfo.num
      } else if (line.startsWith('<uniqueid')) {
        movieInfo.uniqueid = getMatchContent(line, numRegex)
      } else if (line === '<set>') {
        isSet = true
      } else if (line === '</set>') {
        isSet = false
      } else if (line === '<actor>') {
        isActor = true
      } else if (line === '</actor>') {
        isActor = false
      } else {
        const lineMatch = updateMovieInfo(line, isSet, isActor)
        movieInfo[lineMatch.key] += lineMatch.value
      }
    }
    movieInfo.year = Number.parseInt(movieInfo.releaseTime.substring(0, 4), 10)

    if (movieInfo.uniqueid !== '') {
      if (movieInfo.num === '') {
        movieInfo.num = movieInfo.uniqueid
      }
      if (movieInfo.actress.length > 0) {
        movieInfo.actress += '|'
      }
      movieInfo.tags = formatMovieTags(movieInfo.tags, replaceTags)
      movieInfo.genres = formatMovieTags(movieInfo.genres, replaceTags)
      if (movieInfo.tags.length === 0 && movieInfo.genres.length > 0) {
        movieInfo.tags = movieInfo.genres
      }
      // 复制nfo文件
      const nfoPath = join(thumbnails, movieInfo.num, movieInfo.num + getFileExtension(file))
      fsCopyFile(file, nfoPath)
      const currentFolder = getFileFolder(file)
      const currentFolderFiles = files.filter(x => x.startsWith(currentFolder))
      movieInfo = findVideoFile(currentFolderFiles, movieInfo)
      if (movieInfo.file.length > 0) {
        const stats = await getFileStats(movieInfo.file.split('|')[0])
        if (stats) {
          movieInfo.fileSize += stats.size
          movieInfo.createdTime = stats.mtime.getTime()
        }
      }
    } else {
      console.log(`uniqueid is null :${file}`)
    }
  } catch (error: any) {
    console.error(`Error reading NFO file: ${error.message}`)
  }
  return movieInfo
}

// 查找影片视频文件和封面
function findVideoFile(files: string[], movieInfo: DbMovie) {
  for (const dirFile of files) {
    if (dirFile.endsWith('.jpg')) {
      if (dirFile.includes('poster') && movieInfo.poster === '') {
        const posterPath = join(thumbnails, movieInfo.num, `poster${getFileExtension(dirFile)}`)
        fsCopyFile(dirFile, posterPath)
        movieInfo.poster = `/thumbnails/${movieInfo.num}/poster${getFileExtension(dirFile)}`
      } else if (dirFile.includes('fanart') || (dirFile.includes('background') && movieInfo.cover === '')) {
        const coverPath = join(thumbnails, movieInfo.num, `fanart${getFileExtension(dirFile)}`)
        fsCopyFile(dirFile, coverPath)
        movieInfo.cover = `/thumbnails/${movieInfo.num}/fanart${getFileExtension(dirFile)}`
      }
    }
    // 兼容多视频
    if (
      dirFile.toLowerCase().endsWith('.mp4') ||
      dirFile.toLowerCase().endsWith('.mkv') ||
      dirFile.toLowerCase().endsWith('.wmv') ||
      dirFile.toLowerCase().endsWith('.iso')
    ) {
      movieInfo.file += `${dirFile.replace('/app/public/', '/')}|`
      if (dirFile.toUpperCase().includes('-C.') || dirFile.toUpperCase().includes('-UC.')) {
        movieInfo.tags += '中文字幕|'
      }
      if (dirFile.toUpperCase().includes('-UC.') || dirFile.toUpperCase().includes('-U.')) {
        movieInfo.tags += '无码破解|'
      }
      if (dirFile.toUpperCase().includes('-4K.')) {
        movieInfo.tags += '4K|'
      }
    }
    if (dirFile.endsWith('.torrent')) {
      const torrentPath = join(thumbnails, movieInfo.num, movieInfo.num + getFileExtension(dirFile))
      fsCopyFile(dirFile, torrentPath)
      movieInfo.torrent = `/thumbnails/${movieInfo.num}/${movieInfo.num}${getFileExtension(dirFile)}`
    }
  }
  return movieInfo
}

// 更新影片信息
function updateMovieInfo(line: string, isSet: boolean, isActor: boolean) {
  const result = {
    key: '',
    value: '' as any
  }
  if (titleRegex.test(line)) {
    result.key = 'title'
    result.value = getMatchContent(line, titleRegex)
  } else if (originalTitleRegex.test(line)) {
    result.key = 'originTitle'
    result.value = getMatchContent(line, originalTitleRegex)
  } else if (ratingRegex.test(line)) {
    result.key = 'score'
    result.value = Number.parseFloat(getMatchContent(line, ratingRegex))
  } else if (plotRegex.test(line)) {
    result.key = 'introduction'
    result.value = getMatchContent(line, plotRegex)
  } else if (premieredRegex.test(line)) {
    result.key = 'releaseTime'
    result.value = getMatchContent(line, premieredRegex)
  } else if (tagRegex.test(line)) {
    result.key = 'tags'
    result.value = `|${getMatchContent(line, tagRegex)}`
  } else if (genreRegex.test(line)) {
    result.key = 'genres'
    result.value = `|${getMatchContent(line, genreRegex)}`
  } else if (directorRegex.test(line)) {
    result.key = 'director'
    result.value = getMatchContent(line, directorRegex)
  } else if (countryRegex.test(line)) {
    result.key = 'country'
    result.value = getMatchContent(line, countryRegex)
  } else if (studioRegex.test(line)) {
    result.key = 'studio'
    result.value = getMatchContent(line, studioRegex)
  } else if (isSet && line.startsWith('<name>')) {
    result.key = 'series'
    result.value = getMatchContent(line, nameRegex)
  } else if (isActor && line.startsWith('<name>')) {
    result.key = 'actress'
    result.value = `|${getMatchContent(line, nameRegex)}`
  }
  return result
}

function chunkArray(array: never[], chunkSize: number) {
  const result: never[] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    result.push(chunk as never)
  }
  return result
}
function getMatchContent(line: string, reg: RegExp) {
  const matches = line.match(reg)
  if (matches !== null && matches.length >= 1) {
    return matches[1]
  }
  return ''
}

// 格式化影片标签
function formatMovieTags(tags: string, replaceTags: Array<string>) {
  const tagsList = tags.split('|').filter(x => x.length > 0)
  let formatTag = ''
  for (const tag of tagsList) {
    const target: string = replaceTags.find(x => x.startsWith(`${tag}|`)) ?? ''
    if (target === '') {
      formatTag += `|${tag}`
    } else if (target.split('|')[1] !== '删除') {
      formatTag += `|${target.split('|')[1]}`
    }
  }
  return formatTag.length > 0 ? `${formatTag}|` : ''
}


interface DbMovie extends MovieInfo {
  id?: number
  createdTime: number | string // 添加时间
  updatedTime?: number
  isDelete?: boolean
  viewCount: number // 查看次数
  favorite: boolean // 收藏
  personalScore: number | undefined; // 私人评分
  [key: string]: any
}
type MovieInfo = {
  uniqueid: string // 唯一标识
  num: string // 番号
  title: string // 中文标题
  originTitle: string // 原始标题
  introduction: string // 简介
  file: string // 文件路径
  torrent: string // 种子
  cover: string // 封面
  poster: string // 海报
  tags: string // 标签
  genres: string // 流派
  studio: string // 厂商
  country: string // 地区
  series: string // 系列
  actress: string // 演员
  director: string // 导演
  year: number // 年份
  releaseTime: string // 上映时间
  score: number // 评分
  fileSize: number
}
