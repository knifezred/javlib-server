import type { Express } from 'express'
import { Between, Brackets, Equal, In, IsNull, Like, MoreThanOrEqual, Not } from 'typeorm'
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

      if (req.body.tag !== null && req.body.tag !== undefined && req.body.tag !== '') {
        movies
          .andWhere({
            tags: Like(`%|${req.body.tag}|%`)
          })
      }

      if (req.body.keyword !== null && req.body.keyword !== undefined && req.body.keyword !== '') {
        movies
          .andWhere({
            title: Like(`%${req.body.keyword}%`)
          })
      }
      if (req.body.folder !== null && req.body.folder !== undefined && req.body.folder !== '') {
        movies
          .andWhere({
            file: Like(`${req.body.folder}%`)
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
      if (req.body.director !== undefined && req.body.director !== null && req.body.director !== '') {
        movies.andWhere({
          director: Equal(req.body.director)
        })
      }
      if (req.body.viewCount !== undefined && req.body.viewCount !== null && req.body.viewCount > -1) {
        if (req.body.viewCount == 0) {
          // 0 未播放
          movies.andWhere({
            viewCount: 0
          })
        } else {
          // >=1 已播放
          movies.andWhere({
            viewCount: MoreThanOrEqual(req.body.viewCount)
          })
        }
      }
      if (req.body.all !== undefined && req.body.all !== null && req.body.all == true) {
        // 不传或传false时查未删除，否则查全部
      } else {
        movies
          .andWhere({
            isDelete: Equal(false)
          })
      }
      const result = await movies
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

  // 全局搜索
  server.post('/api/movie/global/search', async (req, res) => {
    console.log(req.url)
    try {
      const movies = repository.createQueryBuilder('movie')
      if (req.body.keyword !== null && req.body.keyword !== undefined && req.body.keyword !== '') {
        movies
          .where({ isDelete: Equal(false) })
          .andWhere(new Brackets(qb => {
            qb.where({ title: Like(`%${req.body.keyword}%`) })
              .orWhere({ actress: Like(`%|${req.body.keyword}|%`) })
              .orWhere({ tags: Like(`%|${req.body.keyword}|%`) })
              .orWhere({ studio: Like(`%${req.body.keyword}%`) })
              .orWhere({ series: Like(`%${req.body.keyword}%`) })
              .orWhere({ director: Like(`%${req.body.keyword}%`) })
          }))
      }
      const result = await movies
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
      const query = `-- 获取所有系列
                    WITH all_series AS (
                      SELECT DISTINCT series
                      FROM movie
                      WHERE isDelete = 0 AND series IS NOT NULL AND series != ''
                    )
                    -- 为每个系列获取3个最新封面
                    SELECT
                      s.series,
                      (
                        SELECT GROUP_CONCAT(poster, '|')
                        FROM (
                          SELECT poster
                          FROM movie
                          WHERE series = s.series
                            AND isDelete = 0
                            AND poster IS NOT NULL
                          ORDER BY createdTime DESC
                          LIMIT 3
                        )
                      ) AS cover
                    FROM all_series s`
      const result = await repository.query(query)
      console.log(result)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/movie/series/list', async (req, res) => {
    console.log(req.url)
    try {
      // 首先获取分页后的系列列表
      const seriesQuery = repository.createQueryBuilder('movie')
        .select('movie.series')
        .where({ isDelete: Equal(false) })
        .andWhere({ series: Not('') })
        .andWhere({ series: Not(IsNull()) })
        .groupBy('movie.series')
        .take(req.body.pageSize)
        .skip((req.body.page - 1) * req.body.pageSize)

      const [seriesList, total] = await seriesQuery.getManyAndCount()
      console.log(total)
      console.log(seriesList)
      // 为每个系列获取4个封面
      const result = await Promise.all(seriesList.map(async (series) => {
        const covers = await repository
          .createQueryBuilder('movie')
          .select('movie.poster')
          .where({
            series: series.series,
            isDelete: Equal(false),
            poster: Not(IsNull())
          })
          .orderBy('movie.createdTime', 'DESC')
          .limit(4)
          .getRawMany()

        return {
          series: series.series,
          cover: covers.map(c => c.movie_poster).filter(c => c).join('|')
        }
      }))
      res.status(200).json({
        records: result,
        size: req.body.pageSize,
        current: req.body.page,
        total
      })
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

  server.post('/api/movie/recent/videos', async (req, res) => {
    console.log(req.url)
    try {
      const query = `select DATE(datetime(createdTime / 1000, 'unixepoch', 'localtime')) AS title,count(*) as fileSize from movie group by  DATE(datetime(createdTime / 1000, 'unixepoch', 'localtime')) order by createdTime desc limit ` + req.body.limit
      const result = await repository.query(query)
      console.log(result)
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
