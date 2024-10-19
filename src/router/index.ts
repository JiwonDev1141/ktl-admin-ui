import {
  createRouter,
  createWebHistory,
  Router,
  // RouteRecordName,
  RouteRecordRaw,
} from 'vue-router';

import MainPage from '@/pages/MainPage.vue';
import Login from '@/pages/Auth/Login.vue';
import ReservationVue from '@/pages/adminUser/Reservation/Reservation.vue';
import PlaygroundPageVue from '@/pages/PlaygroundPage/PlaygroundPage.vue';
import ReservationManagementVue from '@/pages/adminUser/ReservationManagement/ReservationManagement.vue';
// import AdminMonitoringVue from '@/pages/adminUser/Monitoring/AdminMonitoring.vue';
import AdminStatisticsVue from '@/pages/user/Statistics/AdminStatistics.vue';
import UserManagementVue from '@/pages/adminUser/UserManagement/UserManagement.vue';

const routes: Array<RouteRecordRaw> = [
  {
    component: MainPage,
    path: '/',
    name: 'mainPage',
  },
  {
    component: Login,
    path: '/auth/login',
    name: 'login',
  },
  {
    component: AdminStatisticsVue,
    path: '/reservations',
    name: 'reservation',
  },
  {
    component: PlaygroundPageVue,
    path: '/playground',
    name: 'playground',
  },
  {
    // component: AdminMonitoringVue,
    component: ReservationVue,
    path: '/admin/reservations',
    name: 'admin-reservation',
  },
  {
    component: AdminStatisticsVue,
    path: '/admin/statistics',
    name: 'admin-statistics',
  },
  {
    component: ReservationManagementVue,
    path: '/admin/reservations/management',
    name: 'reservationManagement',
  },
  {
    component: UserManagementVue,
    path: '/admin/users/management',
    name: 'userManagement',
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
  const baseTitle = (to.name)?.toString()!;
  
  if (to.name === 'index') {
    document.title = baseTitle;
  } else {
    document.title = `KTL | ${baseTitle}`;
  }
});

export default router;
