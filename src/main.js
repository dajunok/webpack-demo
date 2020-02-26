import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'





new Vue({
  router,       //挂载将路由器到根元素'#app'下，挂载后就可以在'#app'对应的元素下通过<router-link>标签使用了。
  store,
  render: h => h(App)   //使用render函数渲染App.vue单文件组件来创建HTML，类似于template选项功能。
}).$mount('#app')
