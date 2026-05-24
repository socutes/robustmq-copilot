# 配置文件说明

## 概述

Web UI 项目使用配置文件来管理各种设置，支持环境变量覆盖。

## 配置文件

### `app.js` - 主配置文件

包含以下配置项：

#### 端口配置

- `port` - 服务器端口（默认：4000）

#### API配置

- `api.baseUrl` - HTTP API 基础地址（默认：null，使用当前页面地址）

## 环境变量覆盖

### 端口配置

```bash
# 设置服务器端口
PORT=8080 pnpm run dev
PORT=8080 pnpm run preview
```

### API配置

```bash
# 设置HTTP API基础地址
export API_BASE_URL=http://api.example.com:8080
```

## 使用示例

### 1. 使用默认配置

```bash
pnpm run dev
# 开发服务器将在 http://localhost:4000 启动
```

### 2. 临时设置端口

```bash
PORT=8080 pnpm run dev
# 开发服务器将在 http://localhost:8080 启动
```

### 3. 连接自定义后端

```bash
API_BASE_URL=http://192.168.1.100:8080 pnpm run dev
```

## 配置优先级

### API地址配置

1. 环境变量配置的API地址（最高优先级）
2. 当前页面地址（中等优先级）
3. 默认fallback地址（最低优先级）

## 注意事项

- 端口配置支持数字类型，环境变量会自动转换为数字
- 所有配置在构建时确定，运行时不可更改
- API地址配置支持完整的URL格式（包含协议、主机、端口）
- 如果环境变量未设置API地址，系统会自动使用当前页面地址
- 配置会通过 `window.__APP_CONFIG__` 注入到前端，可在浏览器控制台查看
