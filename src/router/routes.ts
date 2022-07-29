import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/auth',
        component: () => import('pages/AuthPage.vue'),
      },
      {
        path: '/pet/:id',
        component: () => import('pages/PetPage.vue'),
      },
      {
        path: '/upload',
        component: () => import('pages/UploadPet.vue'),
      },
      {
        path: '/donate',
        component: () => import('src/pages/DonatePage.vue'),
      },
      {
        path: '/contact',
        component: () => import('src/pages/ContactPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
