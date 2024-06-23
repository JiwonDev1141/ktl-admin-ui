import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router';

import MainPage from '../pages/MainPage.vue';
import Login from '../pages/Login.vue';
import MonitoringVue from '../pages/User/Monitoring/Monitoring.vue';

const routes: Array<RouteRecordRaw> = [
  {
    component: MainPage,
    path: '/',
    name: 'mainPage',
  },
  {
    component: Login,
    path: '/login',
    name: 'loginPage',
  },
  {
    component: MonitoringVue,
    path: '/monitoring',
    name: 'monitoring',
  },
  //   {
  //     component: Example,
  //     path: "/example",
  //     name: "example",
  //     meta: { title: "Examples" }
  //   }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  const baseTitle = 'Vue + TypeScript + Vite';

  if (to.name === 'index') {
    document.title = baseTitle;
  } else {
    document.title = `IoT Dashboard | ${baseTitle}`;
  }
});

export default router;
