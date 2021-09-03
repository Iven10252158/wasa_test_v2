import { createRouter, createWebHashHistory } from 'vue-router'
// import MainPage from '../views/MainPage.vue'

const routes = [
  {
    path: '',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/MainPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,

  scrollBehavior (to, from, savedPosition) {
    // return desired position
    // console.log('to', to, 'from', from, 'savedPosition', savedPosition)
    if (to.fullPath.match('/')) {
      return {
        top: 0
      }
    }
    return {}
  }
})

export default router
