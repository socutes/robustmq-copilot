// 应用配置文件
// 支持环境变量覆盖，优先级：环境变量 > 配置文件 > 默认值

const defaultConfig = {
  // 服务器端口配置
  ports: {
    dev: 3000,
    preview: 3000,
    build: 3000,
  },

  // 应用配置
  app: {
    title: 'RobustMQ Admin',
    description: 'RobustMQ Admin',
    themeColor: '#fff',
  },

  // 开发配置
  dev: {
    host: 'localhost',
    open: true,
    hot: true,
  },

  // API配置
  api: {
    // HTTP API 基础地址，如果设置了则优先使用，否则使用当前页面地址
    baseUrl: null,
    // gRPC 服务地址，如果设置了则优先使用，否则使用当前页面地址
    grpcUrl: null,
    // PlacementCenter gRPC 服务地址，如果设置了则优先使用，否则使用当前页面地址+1228端口
    placementGrpcUrl: null,
  },
};

// 从环境变量读取端口配置
const getPort = type => {
  const envVar = process.env[`PORT_${type.toUpperCase()}`];
  return envVar ? parseInt(envVar, 10) : defaultConfig.ports[type];
};

const config = {
  ports: {
    dev: getPort('dev'),
    preview: getPort('preview'),
    build: getPort('build'),
  },

  app: {
    title: process.env.APP_TITLE || defaultConfig.app.title,
    description: process.env.APP_DESCRIPTION || defaultConfig.app.description,
    themeColor: process.env.APP_THEME_COLOR || defaultConfig.app.themeColor,
  },

  dev: {
    host: process.env.DEV_HOST || defaultConfig.dev.host,
    open: process.env.DEV_OPEN !== 'false',
    hot: process.env.DEV_HOT !== 'false',
  },

  api: {
    baseUrl: process.env.API_BASE_URL || defaultConfig.api.baseUrl,
    grpcUrl: process.env.API_GRPC_URL || defaultConfig.api.grpcUrl,
    placementGrpcUrl: process.env.API_PLACEMENT_GRPC_URL || defaultConfig.api.placementGrpcUrl,
  },

  // 导出默认配置供参考
  defaults: defaultConfig,
};

// 同时支持 CommonJS 和 ES 模块
export default config;
export const { ports, app, dev, api, defaults } = config;

// CommonJS 兼容
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
  module.exports.ports = ports;
  module.exports.app = app;
  module.exports.dev = dev;
  module.exports.api = api;
  module.exports.defaults = defaults;
}
