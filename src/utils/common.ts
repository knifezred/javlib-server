import { existsSync, promises, unlinkSync } from 'fs'
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
    console.log(`${dir} find files ${files.length}`)
    for (const item of items) {
      const fullPath = join(dir, item)
      if (!(await promises.stat(fullPath)).isDirectory()) {
        files.push(fullPath)
        console.log(fullPath)
      }
    }
  }
  console.log('dir recursively')
  return files
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

export async function fsCopyFile(source: string, destination: string) {
  try {
    if (!existsSync(destination)) {
      if (!existsSync(getFileFolder(destination))) {
        console.log(`mkdir ${destination}`)
        promises.mkdir(getFileFolder(destination), { recursive: true })
      }
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
    const stats = await promises.stat('/app/public/' + filePath)
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
  unlinkSync(filePath)
}
