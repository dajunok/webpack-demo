import Vue from 'vue';
import RouterDemo from '@/views/RouterDemo.vue';


new Vue({
    render: h => h(RouterDemo,{
      props:{   //赋值组件定义的props

      },
    }),
}).$mount('#app');