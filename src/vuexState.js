import Vue from 'vue';
import StateDemo from '@/views/StateDemo.vue';


new Vue({
    render: h => h(StateDemo,{
      props:{   //赋值组件定义的props

      },
    }),
}).$mount('#app');
