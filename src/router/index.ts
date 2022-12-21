import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Typography from '../views/Typography.vue';
import Buttons from '../views/Buttons.vue';
import Checkbox from '../views/Checkbox.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/typography',
    name: 'Typography',
    component: Typography,
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons,
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: Checkbox,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
