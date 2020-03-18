import Vue from 'vue';
import router from './router';
import store from './store';
import Bootstrap from './views/Bootstrap.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'



new Vue({
    router,     //将Vue路由器 router注入所有子组件。
    store,      //将统一管理状态store注入所有子组件
    render: h => h(Bootstrap,{
      props:{   //赋值组件定义的props
        url:STATIC_URL,  //DefinePlugin插件定义的全局变量
      },
    }),
}).$mount('#app');