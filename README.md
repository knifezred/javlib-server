# Javlib-Server

Javlib 的服务端，可部署在 NAS 中供移动端和桌面端使用

### 1Panel 部署

1. 打开 1Panel->网站->运行环境->Node.js
2. 创建运行环境, 填写配置如下

```
名称: javlib-server(随便填)
应用: Node.js
版本: 20.14.0
源码目录: 自行选择
启动命令: start 【node dist/index.js】
应用端口: 3000
映射端口: 15175(随便填)
端口外部访问: 勾选
包管理器: pnpm
镜像源: 腾讯
容器名称: javlib-server(随便填)

```

3. 启动之后选择 1Panel-> 容器 -> 编排,找到刚刚创建的编排 javlib-server，点击编辑，挂载自己的影视文件夹。

```
    - /volume1/media/媒体库:/app/public/media/vol1
    - /volume2/电影:/app/public/media/vol2
    ...
```

> 必须挂载到/app/public/目录下，建议统一挂载在/app/public/media/下，多个目录自行添加二级目录

```
networks:
    1panel-network:
        external: true
services:
    node:
        command: bash /run.sh
        container_name: ${CONTAINER_NAME}
        image: 1panel/node:${NODE_VERSION}
        labels:
            createdBy: Apps
        networks:
            - 1panel-network
        ports:
            - ${HOST_IP}:${PANEL_APP_PORT_HTTP}:${NODE_APP_PORT}
        restart: on-failure:5
        volumes:
            - ${CODE_DIR}:/app
            - ./run.sh:/run.sh
            - ./.env:/.env
            - /volume1/media/媒体库:/app/public/media/vol1  #新增挂载
        working_dir: /app
```

4. 重启 Node.js 运行环境，查看日志

当日志出现`Javlib Server started on port : 3000`时则部署成功

## Project Setup

### Install

```bash
$ pnpm i
```

### Development

```bash
$ pnpm dev
```

### Build

```bash
$ pnpm build
```
