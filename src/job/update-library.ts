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

// 支持的视频文件扩展名列表
const VIDEO_EXTENSIONS = ['mp4', 'mkv', 'wmv', 'avi', 'mov', 'rmvb', 'ts', 'flv', 'iso', 'strm']

let replaceTags = [] as string[]
let actressMapping = [] as string[]
export async function updateMovieLibrary() {
  console.log('updateMovieLibrary start')
  const storageRepo = AppDataSource.getRepository(Storage)
  const movieRepo = AppDataSource.getRepository(Movie)
  const allMovies = await movieRepo.find()
  const addMovies: Array<Movie> = []
  console.log(`find ${allMovies.length} movies in database`)
  const tagIndex = await storageRepo.findOneBy({ key: 'tag_index' })
  if (tagIndex !== null) {
    replaceTags = tagIndex.value.split('\n')
  }
  const actressMappingResult = await storageRepo.findOneBy({ key: 'actress_mapping' })
  if (actressMappingResult !== null) {
    actressMapping = actressMappingResult.value.split('\n')
  }
  const res = await storageRepo.findOneBy({ key: 'media_folders' })
  if (res) {
    const folders = res.value.split('\n').filter(x => x.length > 0)
    listAllDirFiles(folders)
      .then(async files => {
        const promises = files
          .filter(x => x.toLowerCase().endsWith('.nfo'))
          .map(file => {
            return readNfoInfo(file, files)
          })
        const results = await Promise.all(promises)
        results.forEach(movieInfo => {
          const duplicateMovie = addMovies.find(x => x.num == movieInfo.num)
          if (duplicateMovie) {
            console.log(`duplicate num : ${movieInfo.num}`)
            duplicateMovie.file += movieInfo.file
            duplicateMovie.fileSize = duplicateMovie.fileSize + movieInfo.fileSize
          } else {
            const movieRes = allMovies.find(x => x.num === movieInfo.num)
            if (movieRes) {
              const updateMovieEntity = {
                ...movieInfo,
                id: movieRes.id,
                isDelete: movieInfo.file.length === 0,
                favorite: movieRes.favorite,
                favoriteTime: movieRes.favoriteTime,
                personalScore: movieRes.personalScore,
                viewCount: movieRes.viewCount,
                viewTime: movieRes.viewTime
              } as Movie
              addMovies.push(updateMovieEntity)
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
            // 有影片的演员列表
            const actressNames: string[] = []
            const actressMovies = addMovies.filter(x => x.isDelete === false)
            actressMovies.forEach(movie => {
              movie.actress
                .split('|')
                .filter(x => x.length > 0)
                .forEach(actressName => {
                  if (!actressNames.includes(actressName)) {
                    actressNames.push(actressName)
                  }
                })
            })
            // 根据映射表替换历史数据演员名称并加入待更新列表
            actressMapping.forEach(mapItem => {
              const oName = mapItem.split('|')[0]
              var oActress = actressList.find(x => x.name == oName && x.score > 0)
              if (oActress) {
                if (!oActress.alias.includes(oActress.name)) {
                  oActress.alias = oActress.name + ',' + oActress.alias
                }
                oActress.name = mapItem.split('|')[1]
                // 本次更新不存在该演员视频时清空数量并删除
                if (!actressNames.includes(oActress.name)) {
                  oActress.isDelete = true
                  oActress.videoCount = 0
                }
                updateActress.push(oActress)
              }
            })
            // 不在映射列表中且无视频的演员清空视频数量并删除
            actressList.forEach(actressItem => {
              if (!actressNames.includes(actressItem.name) && actressMapping.filter(x => x.includes(actressItem.name)).length == 0) {
                actressItem.videoCount = 0
                actressItem.isDelete = true
                updateActress.push(actressItem)
              }
            })
            // 循环本次更新演员列表，修改老数据，新增新数据
            actressNames.forEach(actressName => {
              const actressMovie = actressMovies.find(x => x.actress.includes(`|${actressName}|`))
              // 是否存在拥有该演员名称的视频
              if (actressMovie) {
                let actress = actressList.find(x => x.name === actressName)
                if (actress) {
                  // 映射表中存在,直接从待更新列表更新
                  if (updateActress.filter(x => x.name == actressName).length > 0) {
                    actress = updateActress.find(x => x.name == actressName)
                    actress.updatedTime = Date.now()
                    actress.videoCount = actressMovies.filter(x => x.actress.includes(`|${actressName}|`)).length
                    actress.isDelete = actressMovies.filter(x => x.actress.includes(`|${actressName}|`)).length === 0
                  } else {
                    actress.videoCount = actressMovies.filter(x => x.actress.includes(`|${actressName}|`)).length
                    actress.updatedTime = Date.now()
                    actress.isDelete = actressMovies.filter(x => x.actress.includes(`|${actressName}|`)).length === 0
                    updateActress.push(actress)
                  }
                } else {
                  updateActress.push({
                    createdTime: Date.now(),
                    isDelete: actressMovies.filter(x => x.actress.includes(`|${actressName}|`)).length === 0,
                    favorite: false,
                    score: 0,
                    personalScore: 0,
                    category: '',
                    name: actressName,
                    alias: actressName,
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

              }
              // else {
              //   // 无影片演员
              //   const tempActress = actressList.find(x => x.name === actressName)
              //   if (tempActress) {
              //     tempActress.videoCount = 0
              //     tempActress.isDelete = true
              //     updateActress.push(tempActress)
              //   }
              // }
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
  return addMovies.length
}

async function readNfoInfo(file: string, files: string[]) {
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
    const data = await readFile(file)
    const lines = data.split('\n').map(line => line.trim())
    let isSet = false
    let isActor = false
    for (const line of lines) {
      if (line.startsWith('<num>')) {
        movieInfo.num = line.replace('<num>', '').replace('</num>', '').trim()
        movieInfo.uniqueid = movieInfo.num
      } else if (line.startsWith('<uniqueid type="num"')) {
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
      movieInfo.actress = mappingField(movieInfo.actress, actressMapping)
      movieInfo.tags = mappingField(movieInfo.tags, replaceTags)
      movieInfo.genres = mappingField(movieInfo.genres, replaceTags)
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
    const isVideoFile = VIDEO_EXTENSIONS.some(ext =>
      dirFile.toLowerCase().endsWith(`.${ext}`)
    )
    if (isVideoFile) {
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

// 映射影片字段
function mappingField(field: string, mapping: string[]) {
  const fieldArray = field.split('|').filter(x => x.length > 0)
  let formatTag = ''
  for (const item of fieldArray) {
    const target: string = mapping.find(x => x.startsWith(`${item}|`)) ?? ''
    if (target === '') {
      formatTag += `|${item}`
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
  viewTime?: number
  favorite: boolean // 收藏
  favoriteTime?: number
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
