import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router';

import MainPage from '@/pages/MainPage.vue';
import Login from '@/pages/Login.vue';
import MonitoringVue from '@/pages/User/Monitoring/Monitoring.vue';
import PlaygroundPageVue from '@/pages/PlaygroundPage/PlaygroundPage.vue';
import FacilityManagementVue from '@/pages/User/FacilityManagement/FacilityManagement.vue';
import AdminMonitoringVue from '@/pages/adminUser/Monitoring/AdminMonitoring.vue';
import AdminStatisticsVue from '@/pages/adminUser/Statistics/AdminStatistics.vue';
import EnergyManagementVue from '../pages/User/EnergyManagement/EnergyManagement.vue';

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
  {
    component: FacilityManagementVue,
    path: '/facility-management',
    name: 'facilityManagement',
  },
  {
    component: EnergyManagementVue,
    path: '/energy-management',
    name: 'energyManagement',
  },
  {
    component: PlaygroundPageVue,
    path: '/playground',
    name: 'playground',
  },
  {
    // component: AdminMonitoringVue,
    component: MonitoringVue,
    path: '/admin/monitoring',
    name: 'admin-monitoring',
  },
  {
    component: AdminStatisticsVue,
    path: '/admin/statistics',
    name: 'admin-statistics',
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
  const baseTitle = to.name;

  if (to.name === 'index') {
    document.title = baseTitle;
  } else {
    document.title = `IoT Dashboard | ${baseTitle}`;
  }
});

export default router;
