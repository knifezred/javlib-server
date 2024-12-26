import type { Express } from 'express'
import { Equal, In } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Category } from '../entity/category'

export function initCategoryApi(server: Express) {
  const repository = AppDataSource.getRepository(Category)

  server.post('/api/category/list', async (req, res) => {
    console.log(req.url)
    try {
      const categories = repository.createQueryBuilder('category')
      if (req.body.type !== undefined && req.body.type !== null && req.body.type !== '') {
        categories.andWhere({
          type: Equal(req.body.type)
        })
      }
      if (req.body.keys !== undefined && req.body.keys !== null && req.body.keys !== '') {
        categories.andWhere({
          key: In(req.body.keys.split('|').filter((x: string) => x.length > 0))
        })
      }
      const result = await categories
        .orderBy(
          req.body.sortRule === 'RAND' ? 'RANDOM()' : `category.${req.body.sort}`,
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

  server.get('/api/category/count/:type', async (req, res) => {
    console.log(req.url)
    try {
      const result = await repository.countBy({
        type: req.params.type
      })
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })
  server.get('/api/category/:key', async (req, res) => {
    console.log(req.url)
    try {
      const result = await repository.findOneBy({ key: req.params.key })
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/category/', async (req, res) => {
    console.log(req.url)
    try {
      req.body.createdTime = Date.now()
      req.body.updatedTime = Date.now()
      if (req.body.type === 'tag') {
        const tagItem = await repository.findOneBy({ key: req.body.key, type: 'tag' })
        if (tagItem !== null) {
          tagItem.value = req.body.value
          await repository.save(tagItem)
        } else {
          await repository.save(req.body)
        }
      }
      res.status(200).json(true)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/category/:key', async (req, res) => {
    console.log(req.url)
    try {
      req.body.updatedTime = Date.now()
      const result = await repository.update({ key: req.params.key, type: req.body.type }, req.body)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.delete('/api/category/', async (req, res) => {
    console.log(req.url)
    try {
      const result = await repository.remove(req.body)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })
}
