import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import qiankun from 'vite-plugin-qiankun';
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    // eslint-disable-next-line no-underscore-dangle
    base: qiankunWindow.__POWERED_BY_QIANKUN__ ? '/sub-app' : '/', // 和基座中配置的activeRule一致
    server: {
      open: true,
      fs: {
        strict: true,
      },
      port: 5174,
      cors: true,
      origin: 'http://localhost:5174',
    },
    plugins: [
      qiankun('sub-app', {
        // 配置qiankun插件
        useDevMode: true,
      }),
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  },
  baseConfig
);
