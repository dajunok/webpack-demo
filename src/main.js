import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false  //消息提示的环境配置，设置为开发环境或者生产环境

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
