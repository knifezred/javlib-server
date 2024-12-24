import { join } from 'path'
import { updateMovieLibrary } from '../service/background'
import { getPublicPath } from '../utils/common'
import { AppDataSource } from './data-source'
import { initActressApi } from './repository/actress'
import { initCategoryApi } from './repository/category'
import { initMovieApi } from './repository/movie'
import { initStorageApi } from './repository/storage'
// 绑定api接口
export function setupServerApi(server) {
  // 连接 Sqlite 数据库
  AppDataSource.initialize()
    .then(() => {
      initStorageApi(server)
      initMovieApi(server)
      initCategoryApi(server)
      initActressApi(server)
      // 更新媒体库
      server.post('/api/library/update', async (req, res) => {
        updateMovieLibrary(join(getPublicPath(), 'thumbnails'))
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
