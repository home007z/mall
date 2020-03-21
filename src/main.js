import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'common/toast'

import 'font-awesome/css/font-awesome.css'
// 全局引入UI库 vant
import '@/plugins/vant'
Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// console.log('aaa')
// setTimeout(() => {
//   console.log('bbb')
// })
// console.log('ccc')
// 执行顺序：aaa -> ccc ->bbb
