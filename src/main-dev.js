import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 引入全局样式
import './assets/css/global.css'

import axios from 'axios'

axios.defaults.baseURL = 'http://49.233.20.174:3000/api/'
// axios.defaults.baseURL = 'http://127.0.0.1:3000/api/'

axios.interceptors.request.use(config => {
  // 为请求头对象，添加Token验证的 Authorization 字段
  // console.log(window)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 开始请求，开启进度条
  // 必须返回config
  return config
})

// 返回信息
axios.interceptors.response.use(config => {
  // NProgress.done()
  return config
})

Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
