import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Index from '../components/Index'
import Registered from '../components/Registered'
import PutPwd from '../components/PutPwd'
import RecoverPwd from '../components/RecoverPwd'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/login',
    children: [
      {
        // 修改步数的主页 需要token
        path: '/Home',
        name: 'Home',
        component: Home
      },
      {
        // 用户登陆主页 不需要token
        path: '/Login',
        name: 'Login',
        component: Login
      },
      {
        // 注册主页   不需要token
        path: '/registered',
        name: 'Registered',
        component: Registered
      },
      {
        // 修改密码主页  需要token
        path: '/putPwd',
        name: 'putPwd',
        component: PutPwd
      },
      {
        // 找回密码主页   不需要token
        path: '/RecoverPwd',
        name: 'RecoverPwd',
        component: RecoverPwd
      }
    ]
  }
]

// router对象实例化
const router = new VueRouter({
  routes
})

// 挂载路由守卫
// to代表将要访问的路径
// from代表从哪个路径跳转而来
// next代表放行(是一个函数且有返回值)

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && sessionStorage.getItem('token')) {
    return next('/home')
  }
  if (sessionStorage.getItem('token')) {
    if (to.path === '/Login' && sessionStorage.getItem('token')) {
      return next('/home')
    }
    // if (to.path === '/' && sessionStorage.getItem('token')) {
    //   return next('/home')
    // }
    next()
  } else {
  // 如果是登录页面路径，就直接next()
    if (to.path === '/login') {
      return next()
    } else if (to.path === '/registered') {
      return next()
    } else if (to.path === '/RecoverPwd') {
      return next()
    } else {
      return next('/login')
    }
  }
})

export default router
