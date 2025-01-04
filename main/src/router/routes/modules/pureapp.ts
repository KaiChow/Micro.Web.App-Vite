import MicroAppContainer from '@/views/micro-app/MicroPanel.vue';
import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const SUBAPP: AppRouteRecordRaw = {
  path: '/pure-app',
  name: 'PureAppMain',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.micro.pure.vue3-vite',
    icon: 'icon-user',
    requiresAuth: true,
    order: 30,
  },
  children: [
    {
      path: 'welcome',
      name: 'PureAppVueWorkplace',
      component: MicroAppContainer,
      meta: {
        locale: 'menu.micro.pure.welcome',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default SUBAPP;
