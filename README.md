# Javlib-Server

Javlib 的服务端，可部署在 NAS 中供移动端和桌面端使用

### docker compose 部署

1. 下载发布包，解压到对应的docker文件夹内，如下compose配置则应该解压到/volume1/docker/javlib-server/

2. compose配置

```
services:
    node:
        command: bash /run.sh
        container_name: javlib-server
        image: 1panel/node:20.14.0
        ports:
            - "22789:3000" # 端口号自定义一个即可
        restart: always
        volumes:
            - /volume1/docker/javlib-server/.env:/.env     # 必须
            - /volume1/docker/javlib-server/app:/app       # 必须
            - /volume1/docker/javlib-server/run.sh:/run.sh # 必须
            - /volume1/disk1/电影:/app/public/media/disk1   # 添加映射目录

        working_dir: /app
        environment:
            PUID: "0"
            PGID: "0"

```
> 必须挂载到/app/public/目录下，建议统一挂载在/app/public/media/下，多个目录自行添加二级目录

3. 部署后等待程序执行吗，可能会多次重启，当日志出现`Javlib Server started on port : 3000`时则部署成功，可以正常访问。

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
