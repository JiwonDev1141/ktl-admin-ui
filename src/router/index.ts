import {
  createRouter,
  createWebHistory,
  Router,
  // RouteRecordName,
  RouteRecordRaw,
} from 'vue-router';

import MainPage from '@/pages/MainPage.vue';
import Login from '@/pages/Auth/Login.vue';
import AdminReservationVue from '@/pages/adminUser/Reservation/AdminReservation.vue';
import PlaygroundPageVue from '@/pages/PlaygroundPage/PlaygroundPage.vue';
import AdminReservationManagementVue from '@/pages/adminUser/ReservationManagement/AdminReservationManagement.vue';
// import AdminMonitoringVue from '@/pages/adminUser/Monitoring/AdminMonitoring.vue';
import AdminStatisticsVue from '@/pages/user/Statistics/AdminStatistics.vue';
import UserManagementVue from '@/pages/adminUser/UserManagement/UserManagement.vue';
import ReservationVue from '@/pages/User/Reservation/Reservation.vue';
import ReservationManagementVue from '../pages/User/Reservation/ReservationManagement.vue';

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
    component: PlaygroundPageVue,
    path: '/playground',
    name: 'playground',
  },
  {
    component: ReservationVue,
    path: '/reservations',
    name: 'reservations',
  },
  {
    component: ReservationManagementVue,
    path: '/reservations/management',
    name: 'reservationManagement',
  },
  {
    component: AdminStatisticsVue,
    path: '/reservations',
    name: 'reservation',
  },
  {
    // component: AdminMonitoringVue,
    component: AdminReservationVue,
    path: '/admin/reservations',
    name: 'admin-reservations',
  },
  {
    component: AdminStatisticsVue,
    path: '/admin/statistics',
    name: 'admin-statistics',
  },
  {
    component: AdminReservationManagementVue,
    path: '/admin/reservations/management',
    name: 'admin-reservationManagement',
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
