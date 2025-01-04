import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper';
import globalComponents from '@/components';
import router from './router';
import store from './store';
import i18n from './locale';
import directive from './directive';
import './mock';
import App from './App.vue';
// Styles are imported via arco-plugin. See config/plugin/arcoStyleImport.ts in the directory for details
// 样式通过 arco-plugin 插件导入。详见目录文件 config/plugin/arcoStyleImport.ts
// https://arco.design/docs/designlab/use-theme-package
import '@/assets/style/global.less';
import '@/api/interceptor';
import '@arco-design/web-vue/dist/arco.css';

// 有一个我本来vue3启动的方法里边包括对Router，Store，mount，国际化等配置这里略去
let app: any = null;
function bootstrapVue3() {
  // 进行创建，挂载app的一系列操作，这里挂载的时候可以利用传入的container
  app = createApp(App);
  app.use(ArcoVue, {});
  app.use(ArcoVueIcon);
  app.use(router);
  app.use(store);
  app.use(i18n);
  app.use(globalComponents);
  app.use(directive);
  app.mount('#sub-app');
}

// 增加qiankun子应用的render方法
const initQianKun = () => {
  renderWithQiankun({
    mount(props: any) {
      app = createApp(App);
      app.use(ArcoVue, {});
      app.use(ArcoVueIcon);
      app.use(router);
      app.use(store);
      app.use(i18n);
      app.use(globalComponents);
      app.use(directive).mount(props.container.querySelector('#sub-app'));
    },
    bootstrap() {
      console.log('vue app bootstrap');
    },
    update() {
      console.log('vue app update');
    },
    unmount() {
      console.log('vue app unmount');
      app?.unmount();
    },
  });
};

// 判断当前应用是否在主应用中
// eslint-disable-next-line no-underscore-dangle
if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  initQianKun();
} else {
  bootstrapVue3();
}
