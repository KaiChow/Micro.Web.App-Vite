import MicroAppContainer from '@/views/micro-app/MicroPanel.vue';
import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const SUBAPP: AppRouteRecordRaw = {
  path: '/sub-app',
  name: 'SubAppMain',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.micro',
    icon: 'icon-user',
    requiresAuth: true,
    order: 19,
  },
  children: [
    {
      path: 'dashboard/workplace',
      name: 'SubAppVue',
      component: MicroAppContainer,
      meta: {
        locale: 'menu.micro.subapp',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default SUBAPP;
