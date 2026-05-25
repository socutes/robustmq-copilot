/// <reference types="@rsbuild/core/types" />

// 应用配置类型定义
interface AppConfig {
  port: number;
  api: {
    baseUrl: string | null;
  };
  defaults: any;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ROBUSTMQ_API_URL?: string;
    }
  }

  interface Window {
    __APP_CONFIG__: AppConfig;
  }
}

export {};
