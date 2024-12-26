import cors from 'cors'
import express from 'express'
import { createServer } from 'http'
import { setupServerApi } from './database'
import { getPublicPath } from './utils/common'

// 创建express http服务器
console.log('Javlib Server created')
const server = express()
const serverDir = getPublicPath()
const serverPort = 3000
// 设置静态文件目录
server.use(express.static(serverDir))
console.log(serverDir)
// 解析 JSON 请求体
server.use(express.json())
// 解析URL编码的请求体
server.use(express.urlencoded({ extended: true }))
// 跨域设置
const corsOptions = {
  origin: '*', // 或者使用通配符 '*' 来允许所有来源
  methods: ['GET', 'POST', 'DELETE', 'PUT'], // 允许的HTTP方法
  preflightContinue: false,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'] // 允许的HTTP头
}
server.use('/api', cors(corsOptions))
// 绑定接口
setupServerApi(server)
// 启动服务器
server.listen(serverPort, () => {
  console.log('Javlib Server started on port : ' + serverPort)
})
createServer(server)