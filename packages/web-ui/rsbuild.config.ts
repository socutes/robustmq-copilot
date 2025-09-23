import path from 'path';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';

// 从配置文件读取配置
const appConfig = require('./config/app.js');

export default defineConfig({
  server: {
    port: appConfig.ports.dev,
    host: appConfig.dev.host,
    open: appConfig.dev.open,
  },
  html: {
    title: appConfig.app.title,
    favicon: path.resolve(__dirname, './public/images/favicon.png'),
    meta: {
      'theme-color': appConfig.app.themeColor,
      title: appConfig.app.title,
      description: appConfig.app.description,
      viewport: 'width=device-width, initial-scale=1',
    },
    tags: [
      {
        tag: 'link',
        attrs: {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOriginIsolated: true,
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap',
        },
      },
      {
        tag: 'script',
        attrs: {
          type: 'text/javascript',
        },
        children: `window.__APP_CONFIG__ = ${JSON.stringify(appConfig)};`,
      },
    ],
  },
  source: {
    entry: {
      index: './src/main.tsx',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
      '@pcpb': '@robustmq/grpc-web-services/protos/placement_center',
      '@jspb': '@robustmq/grpc-web-services/protos/journal_server',
      '@mbpb': '@robustmq/grpc-web-services/protos/broker_mqtt',
    },
  },
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack()],
      module: {
        parser: {
          javascript: {
            exportsPresence: false,
          },
        },
      },
    },
  },
});
