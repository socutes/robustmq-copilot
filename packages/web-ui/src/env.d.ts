/// <reference types="@rsbuild/core/types" />

// 应用配置类型定义
interface AppConfig {
  ports: {
    dev: number;
    preview: number;
    build: number;
  };
  app: {
    title: string;
    description: string;
    themeColor: string;
  };
  dev: {
    host: string;
    open: boolean;
    hot: boolean;
  };
  api: {
    baseUrl: string | null;
    grpcUrl: string | null;
    placementGrpcUrl: string | null;
  };
  defaults: any;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // 环境变量类型定义
      // 支持通过环境变量配置 API 地址
      API_BASE_URL?: string;
      API_GRPC_URL?: string;
      API_PLACEMENT_GRPC_URL?: string;
    }
  }

  interface Window {
    __APP_CONFIG__: AppConfig;
  }
}

export {};
