/// <reference types="@rsbuild/core/types" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PUBLIC_ADMIN_SERVER: string;
    }
  }
}

export {};
