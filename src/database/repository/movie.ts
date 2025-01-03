import type { Express } from 'express'
import { Between, Equal, In, Like, MoreThanOrEqual } from 'typeorm'
import { fsDeleteFile } from '../../utils/common'
import { AppDataSource } from '../data-source'
import { Movie } from '../entity/movie'

export function initMovieApi(server: Express) {
  const repository = AppDataSource.getRepository(Movie)

  // eslint-disable-next-line complexity
  server.post('/api/movie/list', async (req, res) => {
    console.log(req.url)
    try {
      const movies = repository.createQueryBuilder('movie')
      if (req.body.years !== null && req.body.years !== undefined) {
        const whereYears: string[] = []
        const singleYear = req.body.years.filter((x: string) => !x.includes('-'))
        if (singleYear.length > 0) {
          whereYears.push({
            year: In(singleYear)
          } as never)
        }
        req.body.years
          .filter((x: string) => x.includes('-'))
          .forEach((option: string) => {
            whereYears.push({
              year: Between(option.split('-')[1], option.split('-')[0])
            } as never)
          })
        if (whereYears.length > 0) {
          movies.andWhere(whereYears)
        }
      }
      // and查询
      if (req.body.tags !== null && req.body.tags !== undefined && req.body.tags.length > 0) {
        const whereParams: any = {}
        let whereStr = ''
        req.body.tags.forEach((tag: string, index: number) => {
          whereStr += `movie.tags LIKE :tag${index} AND `
          whereParams[`tag${index}`] = `%|${tag}|%`
        })
        whereStr = whereStr.substring(0, whereStr.length - 4)
        movies.andWhere(whereStr, whereParams)
      }
      if (req.body.keyword !== null && req.body.keyword !== undefined && req.body.keyword !== '') {
        movies
          .orWhere({
            title: Like(`%${req.body.keyword}%`)
          })
          .orWhere({
            introduction: Like(`%${req.body.keyword}%`)
          })
      }
      if (req.body.actress !== undefined && req.body.actress !== '') {
        movies.andWhere({
          actress: Like(`%|${req.body.actress}|%`)
        })
      }
      if (req.body.favorite !== undefined && req.body.favorite !== null) {
        movies.andWhere({
          favorite: Equal(req.body.favorite)
        })
      }
      if (req.body.studio !== undefined && req.body.studio !== null && req.body.studio !== '') {
        movies.andWhere({
          studio: Equal(req.body.studio)
        })
      }
      if (req.body.series !== undefined && req.body.series !== null && req.body.series !== '') {
        movies.andWhere({
          series: Equal(req.body.series)
        })
      }
      if (req.body.viewCount !== undefined && req.body.viewCount !== null && req.body.viewCount > -1) {
        if (req.body.viewCount == 0) {
          // 0 未播放
          movies.andWhere({
            viewCount: 0
          })
        } else {
          // 1 已播放
          movies.andWhere({
            viewCount: MoreThanOrEqual(req.body.viewCount)
          })
        }
      }
      const result = await movies
        .andWhere({
          isDelete: Equal(false)
        })
        .orderBy(
          req.body.sortRule === 'RAND' ? 'RANDOM()' : `movie.${req.body.sort}`,
          req.body.sortRule === 'RAND' ? 'ASC' : req.body.sortRule
        )
        .take(req.body.pageSize)
        .skip((req.body.page - 1) * req.body.pageSize)
        .getManyAndCount()
      res.status(200).json({
        records: result[0],
        size: req.body.pageSize,
        current: req.body.page,
        total: result[1]
      })
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/movie/all/movies', async (req, res) => {
    console.log(req.url)
    try {
      const result = (await repository.find()).filter(x => x.isDelete === false)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/movie/all/actress', async (req, res) => {
    console.log(req.url)
    try {
      const movies = repository.createQueryBuilder('movie')

      const result = await movies
        .where({
          isDelete: Equal(false)
        })
        .groupBy('movie.actress')
        .getMany()
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/movie/all/studio', async (req, res) => {
    console.log(req.url)
    try {
      const movies = repository.createQueryBuilder('movie')
      const result = await movies
        .select('movie.studio')
        .where({
          isDelete: Equal(false)
        })
        .groupBy('movie.studio')
        .getMany()
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/movie/all/director', async (req, res) => {
    console.log(req.url)
    try {
      const movies = repository.createQueryBuilder('movie')
      const result = await movies
        .select('movie.director')
        .where({
          isDelete: Equal(false)
        })
        .groupBy('movie.director')
        .getMany()
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/movie/all/series', async (req, res) => {
    console.log(req.url)
    try {
      const movies = repository.createQueryBuilder('movie')
      const result = await movies
        .select('movie.series')
        .where({
          isDelete: Equal(false)
        })
        .groupBy('movie.series')
        .getMany()
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })
  server.post('/api/movie/all/tags', async (req, res) => {
    console.log(req.url)
    try {
      const movies = repository.createQueryBuilder('movie')
      const result = await movies
        .select('movie.tags')
        .where({
          isDelete: Equal(false)
        })
        .groupBy('movie.tags')
        .getMany()
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.get('/api/movie_total_file_size', async (req, res) => {
    console.log(req.url)
    try {
      const result = await repository.sum('fileSize')
      res.status(200).json(result == null ? 0 : result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.get('/api/movie_total_count', async (req, res) => {
    console.log(req.url)
    try {
      // 所有未删除视频数量
      const result = await repository.countBy({
        isDelete: false
      })
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.get('/api/movie_favorites_count', async (req, res) => {
    console.log(req.url)
    try {
      // 所有未删除视频数量
      const result = await repository.countBy({
        isDelete: false,
        favorite: true
      })
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.get('/api/movie/:num', async (req, res) => {
    console.log(req.url)
    try {
      const result = await repository.findOneBy({ num: req.params.num })
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/movie/', async (req, res) => {
    console.log(req.url)
    try {
      var entity = req.body
      entity.updatedTime = Date.now()
      const result = await repository.save(entity)
      res.status(200).json(result.id > 0)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/movie/:num', async (req, res) => {
    console.log(req.url)
    try {
      var entity = req.body
      entity.updatedTime = Date.now()
      const result = await repository.update({ num: req.params.num }, entity)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.delete('/api/movie/', async (req, res) => {
    console.log(req.url)
    try {
      var entity = req.body
      // 删除视频文件
      var file = entity.file
      var files = file.split("|").filter((x: string) => x.length > 0)
      files.forEach((filePath: string) => {
        fsDeleteFile(filePath)
      })
      // 软删除
      entity.isDelete = true
      entity.fileSize = 0
      await repository.save(entity)
      res.status(200).json(true)
    } catch (error) {
      res.status(500).send(error)
    }
  })
}
