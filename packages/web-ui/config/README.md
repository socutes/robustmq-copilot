# 配置文件说明

## 概述

Web UI 项目使用配置文件来管理各种设置，支持环境变量覆盖。

## 配置文件

### `app.js` - 主配置文件

包含以下配置项：

#### 端口配置

- `ports.dev` - 开发服务器端口（默认：4000）
- `ports.preview` - 预览服务器端口（默认：4000）
- `ports.build` - 构建端口（默认：4000）

#### 应用配置

- `app.title` - 应用标题（默认：RobustMQ Admin）
- `app.description` - 应用描述（默认：RobustMQ Admin）
- `app.themeColor` - 主题颜色（默认：#fff）

#### 开发配置

- `dev.host` - 开发服务器主机（默认：localhost）
- `dev.open` - 是否自动打开浏览器（默认：true）
- `dev.hot` - 是否启用热重载（默认：true）

#### API配置

- `api.baseUrl` - HTTP API 基础地址（默认：null，使用当前页面地址）
- `api.grpcUrl` - gRPC 服务地址（默认：null，使用当前页面地址）
- `api.placementGrpcUrl` - PlacementCenter gRPC 服务地址（默认：null，使用当前页面地址+1228端口）

## 环境变量覆盖

所有配置都支持通过环境变量覆盖：

### 端口配置

```bash
# 设置开发服务器端口
export PORT_DEV=8080

# 设置预览服务器端口
export PORT_PREVIEW=8080

# 设置构建端口
export PORT_BUILD=8080
```

### 应用配置

```bash
# 设置应用标题
export APP_TITLE="My Custom Title"

# 设置应用描述
export APP_DESCRIPTION="My Custom Description"

# 设置主题颜色
export APP_THEME_COLOR="#000000"
```

### 开发配置

```bash
# 设置开发服务器主机
export DEV_HOST=0.0.0.0

# 禁用自动打开浏览器
export DEV_OPEN=false

# 禁用热重载
export DEV_HOT=false
```

### API配置

```bash
# 设置HTTP API基础地址
export API_BASE_URL=http://api.example.com:8080

# 设置gRPC服务地址
export API_GRPC_URL=http://grpc.example.com:8080

# 设置PlacementCenter gRPC服务地址
export API_PLACEMENT_GRPC_URL=http://placement.example.com:1228
```

## 使用示例

### 1. 使用默认配置

```bash
pnpm run dev
# 开发服务器将在 http://localhost:4000 启动
```

### 2. 使用环境变量覆盖

```bash
# 设置端口为8080
export PORT_DEV=8080
pnpm run dev
# 开发服务器将在 http://localhost:8080 启动
```

### 3. 临时设置环境变量

```bash
# 临时设置端口
PORT_DEV=8080 pnpm run dev
# 开发服务器将在 http://localhost:8080 启动
```

### 4. 在package.json脚本中使用

```json
{
  "scripts": {
    "dev:8080": "PORT_DEV=8080 pnpm run dev",
    "preview:8080": "PORT_PREVIEW=8080 pnpm run preview",
    "dev:api": "API_BASE_URL=http://api.example.com:8080 pnpm run dev",
    "dev:grpc": "API_GRPC_URL=http://grpc.example.com:8080 pnpm run dev"
  }
}
```

### 5. API地址配置示例

```bash
# 使用自定义API地址
API_BASE_URL=http://192.168.1.100:8080 pnpm run dev

# 使用不同的gRPC服务地址
API_GRPC_URL=http://192.168.1.101:8080 pnpm run dev

# 使用不同的PlacementCenter地址
API_PLACEMENT_GRPC_URL=http://192.168.1.102:1228 pnpm run dev

# 组合使用多个配置
API_BASE_URL=http://api.example.com:8080 API_GRPC_URL=http://grpc.example.com:8080 pnpm run dev
```

## 配置优先级

### 端口和应用配置

1. 环境变量（最高优先级）
2. 配置文件中的默认值
3. 硬编码的默认值（最低优先级）

### API地址配置

1. 环境变量配置的API地址（最高优先级）
2. 当前页面地址（中等优先级）
3. 默认fallback地址（最低优先级）

## 注意事项

- 端口配置支持数字类型，环境变量会自动转换为数字
- 布尔配置支持字符串 "true"/"false" 和布尔值
- 所有配置在构建时确定，运行时不可更改
- API地址配置支持完整的URL格式（包含协议、主机、端口）
- 如果环境变量未设置API地址，系统会自动使用当前页面地址
- 配置会通过 `window.__APP_CONFIG__` 注入到前端，可在浏览器控制台查看
