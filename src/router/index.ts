import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes: Array<RouteRecordRaw> = [

  {
    path: '/home',
    name: 'home',
    meta:{
      title:'home',
    },
    component: HomeView,
  },
  {
    path: '/luckView',
    name: 'luckView',
    meta:{
      title:'luckView',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/luckView.vue')
  },
  {
    path: '/mapView',
    name: 'mapView',
    meta:{
      title:'mapView',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/mapView.vue')
  },
  {
    path: '/',
    redirect: '/home',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string
  next()
})
export default router
