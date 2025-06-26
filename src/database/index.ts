import { updateMovieLibrary } from '../job/update-library'
import { getFolderCover } from '../utils/common'
import { AppDataSource } from './data-source'
import { initActressApi } from './repository/actress'
import { initCategoryApi } from './repository/category'
import { initMovieApi } from './repository/movie'
import { initStorageApi } from './repository/storage'
// 绑定api接口
export function setupServerApi(server: any) {
  // 连接 Sqlite 数据库
  AppDataSource.initialize()
    .then(() => {
      initStorageApi(server)
      initMovieApi(server)
      initCategoryApi(server)
      initActressApi(server)
      // 更新媒体库
      server.post('/api/library/update', (_req: any, res: any) => {
        updateMovieLibrary()
        res.status(200).json('')
      })
      // 获取文件夹封面
      server.post('/api/folder/cover', async (req: any, res: any) => {
        const { folder } = req.body
        if (folder === null || folder === undefined || folder === '') {
          res.status(400).json('')
          return
        }
        const imgList: string[] = await getFolderCover(folder)
        console.log(imgList)
        res.status(200).json({
          data: imgList
        })
      })
    })
}
