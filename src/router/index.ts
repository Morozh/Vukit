import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/typography',
    name: 'Typography',
    component: () => import(/* webpackChunkName: "typography" */ '../views/Typography.vue'),
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import(/* webpackChunkName: "button" */ '../views/Button.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
