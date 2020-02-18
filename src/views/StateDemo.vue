<template>
  <div>
    <h1>统一状态管理Vuex</h1>
    <store-component></store-component>
  </div>
  
</template>


<script type="text/javascript">
    import store from '@/store';
    import VuexComponent from '@/components/VuexComponent.vue';
    import * as types from '@/other/mutation-types'  //Mutation 常量事件类型导入

    store.commit('increment');
    console.log('计数count：'+store.state.count) // -> 1
    console.log(`cart：${JSON.stringify(store.state.cart.added())}`);
    store.commit(types.CHECKOUT_REQUEST);  //常量形式提交
    console.log(`cart：${JSON.stringify(store.state.cart.added())}`);

    //分发 Action
    store.dispatch('decrement');    
    store.dispatch('addAsync', 5 );  // 以载荷带类型参数形式分发 

    store.dispatch('addObjAsync', { amount: 5 });  // 以载荷带对象参数形式分发 
    // 以对象形式分发
    store.dispatch({
      type: 'addObjAsync',
      amount: 5
    });
    // 以对象形式分发(购物车)
    store.dispatch({
      type: 'checkout',
      products: ['h','i','j','k']
    });


export default{
    name:'example',
    props:{},
    model: {},
    mixins:[],   //data数据合并混入
    data:function(){
      return { 
        
      }; 
    },
    computed:{},
    methods:{},
    watch:{},
    store,  //将store注入所有子组件
    components:{
        'store-component':VuexComponent
    },
    // 生命周期钩子
    beforeCreate:function(){},
    created:function(){},
    beforeMount:function(){},
    mounted:function(){},
    beforeUpdate:function(){},
    updated:function(){},
    activated:function(){},
    deactivated:function(){},
    beforeDestroy:function(){},
    destroyed:function(){},
    errorCaptured:function(){},

}


</script>