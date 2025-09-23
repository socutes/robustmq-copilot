/// <reference types="@rsbuild/core/types" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // 环境变量类型定义
      // 注意：项目现在使用动态地址获取，不再依赖环境变量配置 API 地址
    }
  }
}

export {};
