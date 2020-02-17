<template>
  <div>
    <h1>统一状态管理Vuex</h1>
    <store-component></store-component>
  </div>
  
</template>


<script type="text/javascript">
    import store from '@/store';
    import VuexComponent from '@/components/VuexComponent.vue';

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