<template>
  <div>
    <h1>统一状态管理Vuex</h1>
    <store-counter></store-counter>
  </div>
  
</template>


<script type="text/javascript">
    import store from '@/store';
    import Counter from '@/components/Counter.vue';

    store.commit('increment');
    console.log('计数count：'+store.state.count) // -> 1

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
        'store-counter':Counter
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