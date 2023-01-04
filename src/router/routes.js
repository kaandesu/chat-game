
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'chat',props:true,name:'chat', component: () => import('pages/ChatGame.vue') },
      { path: '',props:true,name:'main', component: () => import('pages/MainMenu.vue') },
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
