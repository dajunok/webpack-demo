//import 'babel-polyfill'   //解决360浏览器、IE浏览器不兼容问题
import Vue from 'vue';
import router from './router'
import store from './store'
import RouterDemo from '@/views/RouterDemo.vue';
import RegisterNavigationGuards from '@/other/RegisterNavigationGuards.js'  //引入导航守卫注册函数

RegisterNavigationGuards(router); //注册全局导航守卫



const userId = '123'
router.push({ path: '/computer', query: { userId }}) // -> /user/123
//router.push({ path: `/user/${userId}` }) // -> /user/123 


new Vue({
    router,     //将Vue路由器 router注入所有子组件。
    store,      //将统一管理状态store注入所有子组件
    render: h => h(RouterDemo,{
      props:{   //赋值组件定义的props

      },
    }),
}).$mount('#app');