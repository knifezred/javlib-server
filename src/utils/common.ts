import { existsSync, mkdirSync, promises, unlinkSync } from 'fs'
import { dirname, join } from 'path'
// 格式化时间戳
export function formatTimestamp(timestamp: number) {
  // 创建一个Date对象
  const date = new Date(timestamp)

  // 获取年份（四位数）
  const year = date.getFullYear()

  // 获取月份（两位数，01-12）
  const month = String(date.getMonth() + 1).padStart(2, '0')

  // 获取日期（两位数，01-31）
  const day = String(date.getDate()).padStart(2, '0')

  // 获取小时（两位数，00-23）
  const hours = String(date.getHours()).padStart(2, '0')

  // 获取分钟（两位数，00-59）
  const minutes = String(date.getMinutes()).padStart(2, '0')

  // 获取秒数（两位数，00-59）
  const seconds = String(date.getSeconds()).padStart(2, '0')

  // 返回格式化后的字符串
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

// 获取文件列表
export async function listAllDirFiles(directories: string[]) {
  const files = [] as string[]
  for (const dir of directories) {
    console.log(dir)
    const items = await promises.readdir(dir, {
      encoding: 'utf-8',
      recursive: true
    })
    console.log(`${dir} find files ${items.length}`)
    for (const item of items) {
      const fullPath = join(dir, item)
      if (!(await promises.stat(fullPath)).isDirectory()) {
        files.push(fullPath)
      }
    }
  }
  return files
}

export async function getFolderCover(folder: string) {
  const imgList: string[] = []
  try {
    const files = await promises.readdir(folder, {
      encoding: 'utf-8',
      recursive: true
    })
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (file.endsWith('poster.jpg') || file.endsWith('poster.png') || file.endsWith('poster.webp')) {
          imgList.push(file)
          if (imgList.length >= 3) {
            return imgList
          }
        }
      }
    }
    return imgList
  } catch (error) {
    console.log(error)
  }
  return imgList
}

export async function getActressImage(actress: string, type: string = 'banner') {
  const actorPath = join(getAppPath(), 'public', 'actor', actress)
  if (existsSync(actorPath)) {
    const files = await promises.readdir(actorPath, {
      encoding: 'utf-8',
      recursive: false
    })
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (file.startsWith(type)) {
          const filePath = join('actor', actress, file)
          console.log(filePath)
          return filePath
        }
      }
    }
  }
  return ''
}

export function checkActressImageExist(actress: string, type: string = 'banner') {
  const actorPath = join(getAppPath(), 'public', 'actor', actress, type)
  const extensions = ['.jpg', '.png', '.webp']
  if (extensions.some(ext => existsSync(actorPath + ext))) {
    return true
  }
  return false
}

export async function readFile(path: string) {
  try {
    const fileData = await promises.readFile(path, 'utf8')
    return fileData
  } catch (error) {
    console.log(error)
  }
  return ''
}

export async function saveFile(file: File) {
  const documentsPath = join(getAppPath(), 'saves', 'upload')
  const filePath = documentsPath + new Date().getTime() + getFileExtension(file.name)
  const arrayBuffer = (await fileArrayToBuffer(file)) as ArrayBuffer
  await promises.writeFile(filePath, new Uint8Array(arrayBuffer))
  return filePath
}

export async function fsCopyFile(source: string, destination: string, force: boolean = false) {
  try {
    // 创建不存在的文件夹
    if (!existsSync(getFileFolder(destination))) {
      console.log(`mkdir ${destination}`)
      mkdirSync(getFileFolder(destination), { recursive: true })
    }
    // 不存在 或者 以nfo结尾 时复制文件
    if (!existsSync(destination) || source.endsWith('.nfo') || force) {
      await promises.copyFile(source, destination)
    }
  } catch (error) {
    console.warn(`copy ${source} to ${destination} error`, error)
  }
}

export async function fileArrayToBuffer(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
    reader.readAsArrayBuffer(file)
  })
}

export function getFileExtension(filename: string) {
  const parts = filename.split('.')
  return parts.length > 1 ? `.${parts.pop()}` : filename
}

export async function getFileStats(filePath: string) {
  try {
    const stats = await promises.stat(join(getPublicPath(), filePath))
    return stats
  } catch (err) {
    console.warn('Error getFileStats:', err)
  }
  return null
}

export function getFileFolder(filePath: string) {
  return dirname(filePath)
}

export function getAppPath() {
  // /app/dist/ 退到根目录
  const appPath = join(__dirname, '..', '..')
  return appPath
}

export function getPublicPath() {
  const appPath = join(getAppPath(), 'public')
  return appPath
}

export function fsDeleteFile(filePath: string) {
  unlinkSync(join(getPublicPath(), filePath))
  console.log('delete file: ' + filePath)
}
