
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'chat/:game',props:true,name:'chat', component: () => import('pages/ChatGame.vue') },
      { path: 'chat', component: () => import('pages/MainMenu.vue') },
      { path: 'main',props:true,name:'main', component: () => import('pages/MainMenu.vue') },
      { path: '',props:true,name:'login', component: () => import('pages/LoginPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
