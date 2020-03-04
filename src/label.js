import Vue from 'vue';
import router from './router'
import store from './store'
import LabelPage from '@/views/LabelPage.vue';


new Vue({
    router,     //将Vue路由器 router注入所有子组件。
    store,      //将统一管理状态store注入所有子组件
    render: h => h(LabelPage,{
      props:{   //赋值组件定义的props
        url:BASE_URL,
      },
    }),
}).$mount('#app');