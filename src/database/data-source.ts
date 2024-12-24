import { join } from 'path'
import { DataSource } from 'typeorm'
import { getAppPath } from '../utils/common'
import { Actress } from './entity/actress'
import { Category } from './entity/category'
import { Movie } from './entity/movie'
import { Storage } from './entity/storage'

const dbPath = join(getAppPath(), 'saves', 'db.sqlite')
export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: dbPath,
  entities: [Storage, Movie, Category, Actress],
  synchronize: true,
  logger: 'file',
  logging: true
})
