import type { Express } from 'express'
import { Between, Equal, In, Like } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Actress } from '../entity/actress'

export function initActressApi(server: Express) {
  const repository = AppDataSource.getRepository(Actress)

  server.post('/api/actress/list', async (req, res) => {
    try {
      console.log(req.url)
      const queryBuilder = repository.createQueryBuilder('actress')
      if (req.body.tags !== null && req.body.tags !== undefined) {
        const whereParams: any = {}
        let whereStr = ''
        req.body.tags.forEach((tag: string, index: number) => {
          whereStr += `actress.tags LIKE :tag${index} AND `
          whereParams[`tag${index}`] = `%|${tag}|%`
        })
        whereStr = whereStr.substring(0, whereStr.length - 4)
        queryBuilder.andWhere(whereStr, whereParams)
      }
      if (req.body.name !== undefined && req.body.name !== '') {
        if (req.body.name.includes('|')) {
          queryBuilder.orWhere({
            name: In(req.body.name.split('|').filter((x: string) => x.length > 0))
          })
        } else {
          queryBuilder
            .orWhere({
              name: Like(`%${req.body.name}%`)
            })
            .orWhere({
              alias: Like(`%${req.body.name}%`)
            })
        }
      }
      if (req.body.face !== undefined && req.body.face !== null) {
        queryBuilder.andWhere({
          face: Between(req.body.face[0], req.body.face[1])
        })
      }
      if (req.body.body !== undefined && req.body.body !== null) {
        queryBuilder.andWhere({
          body: Between(req.body.body[0], req.body.body[1])
        })
      }

      if (req.body.favorite !== undefined) {
        queryBuilder.andWhere({
          favorite: Equal(req.body.favorite)
        })
      }
      if (req.body.cup !== undefined && req.body.cup !== null && req.body.cup !== '') {
        queryBuilder.andWhere({
          cup: Equal(req.body.cup)
        })
      }
      if (req.body.bodySize !== undefined && req.body.bodySize !== null && req.body.bodySize !== '') {
        queryBuilder.andWhere({
          bodySize: Equal(req.body.bodySize)
        })
      }
      const result = await queryBuilder
        .andWhere({
          isDelete: Equal(false)
        })
        .orderBy(
          req.body.sortRule === 'RAND' ? 'RANDOM()' : `actress.${req.body.sort}`,
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

  server.get('/api/actress_total_count', async (req, res) => {
    try {
      console.log(req.url)
      const result = await repository.countBy({
        isDelete: false
      })
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.get('/api/actress_favorites_count', async (req, res) => {
    try {
      console.log(req.url)
      const result = await repository.countBy({
        isDelete: false,
        favorite: true
      })
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.get('/api/actress/:name', async (req, res) => {
    try {
      console.log(req.url)
      const result = await repository.findOneBy({ name: req.params.name })
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/actress/', async (req, res) => {
    try {
      console.log(req.url)
      req.body.createdTime = Date.now()
      req.body.updatedTime = Date.now()
      const result = await repository.save(req.body)
      res.status(200).json(result.id > 0)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/actress/:name', async (req, res) => {
    try {
      console.log(req.url)
      req.body.updatedTime = Date.now()
      const result = await repository.update({ name: req.params.name }, req.body)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  // 根据id更新演员
  server.post('/api/actress/:id/', async (req, res) => {
    try {
      console.log(req.url)
      req.body.updatedTime = Date.now()
      const result = await repository.update({ id: Number(req.params.id) }, req.body)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.delete('/api/actress/', async (req, res) => {
    try {
      console.log(req.url)
      const result = await repository.remove(req.body)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })
}
