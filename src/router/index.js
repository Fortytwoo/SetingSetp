import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Index from '../components/Index'
import Registered from '../components/Registered'
import PutPwd from '../components/PutPwd'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/Login',
    component: Index,
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: Home
      },
      {
        path: '/Login',
        name: 'Login',
        component: Login
      },
      {
        path: '/registered',
        name: 'Registered',
        component: Registered
      },
      {
        path: '/putPwd',
        name: 'putPwd',
        component: PutPwd
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
