import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import * as path from 'path';
import svgr from 'vite-plugin-svgr';
import prerender from '@prerenderer/rollup-plugin';

const pages = ['/', '/test'];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    prerender({
      routes: pages,
      renderer: '@prerenderer/renderer-puppeteer',
      server: {
        host: 'localhost',
        listenHost: 'localhost',
      },
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/i, 'https:')
          .replace(
            /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
            'web3darchitrip.com',
          );
      },
    }),
  ],
  // 구성 요소를 두 번 렌더링하지 않게 수정
  react: {
    strictMode: true,
  },
  server: {
    port: 3000,
    cors: {
      origin: ['http://localhost:3000'],
      methods: ['GET', 'PATCH', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    },
  },
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, '');
        },
      },
      //alias 추가시 jsconfig.json에도 추가해야함
      { find: '@src', replacement: path.resolve(__dirname, 'src') },
      { find: '@img', replacement: path.resolve(__dirname, 'src/assets/img') },
      {
        find: '@json',
        replacement: path.resolve(__dirname, 'src/assets/json'),
      },
      { find: '@svg', replacement: path.resolve(__dirname, 'src/assets/svg') },
      {
        find: '@router',
        replacement: path.resolve(__dirname, 'src/router/Router'),
      },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      {
        find: '@common',
        replacement: path.resolve(__dirname, 'src/components/common'),
      },
      {
        find: '@core',
        replacement: path.resolve(__dirname, 'src/components/core'),
      },
      {
        find: '@modules',
        replacement: path.resolve(__dirname, 'src/components/modules'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils/utils'),
      },
    ],
  },
  // *** jsx 대신 js 사용 start
  // //초기 번들링
  // esbuild: {
  //   loader: 'jsx',
  //   include: /.\/src\/.*\.js?$/,
  //   exclude: [],
  //   jsx: 'automatic',
  // },
  // //의존성 사전처리 최적화
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: {
  //       '.js': 'jsx',
  //     },
  //     plugins: [
  //       {
  //         name: 'load-js-files-as-jsx',
  //         setup(build) {
  //           build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({
  //             loader: 'jsx',
  //             contents: await fs.readFileSync(args.path, 'utf8'),
  //           }));
  //         },
  //       },
  //     ],
  //   },
  // },
  // *** jsx 대신 js 사용 end
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/styles/helper.scss";` },
    },
  },
});
