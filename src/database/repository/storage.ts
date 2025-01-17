import type { Express } from 'express'
import { AppDataSource } from '../data-source'
import { Storage } from '../entity/storage'

export function initStorageApi(server: Express) {
  const repository = AppDataSource.getRepository(Storage)

  server.post('/api/storage/list', async (req, res) => {
    console.log(req.url)
    try {
      const result = repository.find()
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.get('/api/storage/:key', async (req, res) => {
    console.log(req.url)
    try {
      const result = await repository.findOneBy({ key: req.params.key })
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/storage/', async (req, res) => {
    console.log(req.url)
    try {
      req.body.createdTime = Date.now()
      req.body.updatedTime = Date.now()
      console.log(req.body.createdTime)
      const result = await repository.save(req.body)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.post('/api/storage/:key', async (req, res) => {
    console.log(req.url)
    try {
      req.body.updatedTime = Date.now()
      const result = await repository.update({ key: req.params.key }, req.body)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  server.delete('/api/storage/', async (req, res) => {
    console.log(req.url)
    try {
      const result = await repository.remove(req.body)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  })
}
