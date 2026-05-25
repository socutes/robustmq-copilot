# 配置文件说明

## 概述

Web UI 项目使用配置文件来管理各种设置，支持环境变量覆盖。

## 配置文件

### `app.js` - 主配置文件

包含以下配置项：

- `port` - 服务器端口（默认：4000，通过预定义脚本切换，见下方）
- `api.baseUrl` - HTTP API 基础地址（默认：null，使用 `http://localhost:8080`）

## 端口切换

端口通过预定义脚本指定，无需手动设置环境变量：

```bash
pnpm run dev        # 默认端口 4000
pnpm run dev:8080   # 端口 8080
pnpm run dev:3001   # 端口 3001

pnpm run preview:8080  # 预览端口 8080
pnpm run preview:3001  # 预览端口 3001
```

## 环境变量

### API 地址

```bash
# 连接自定义后端地址
ROBUSTMQ_API_URL=http://192.168.1.100:8080 pnpm run dev
```

## 配置优先级

1. 环境变量 `ROBUSTMQ_API_URL`（最高优先级）
2. 默认地址 `http://localhost:8080`（最低优先级）

## 注意事项

- 所有配置在构建时确定，运行时不可更改
- API 地址配置支持完整的 URL 格式（包含协议、主机、端口）
- 配置会通过 `window.__APP_CONFIG__` 注入到前端，可在浏览器控制台查看
