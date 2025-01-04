import MicroAppContainer from '@/views/micro-app/MicroPanel.vue';
import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const SUBAPP: AppRouteRecordRaw = {
  path: '/sub-app',
  name: 'SubAppMain',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.micro.vue3-vite',
    icon: 'icon-user',
    requiresAuth: true,
    order: 19,
  },
  children: [
    {
      path: 'dashboard/workplace',
      name: 'SubAppVueWorkplace',
      component: MicroAppContainer,
      meta: {
        locale: 'menu.micro.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'dashboard/monitor',
      name: 'SubAppVueMonitor',
      component: MicroAppContainer,
      meta: {
        locale: 'menu.micro.monitor',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default SUBAPP;
