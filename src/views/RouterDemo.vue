<template>
  <div>
    <h1># 路由器案例</h1>
    <p>当前路由：{{username}}</p>
    <div>
        <router-link to="/home/zhangSan">Home</router-link> |
        <router-link to="/about/liShi">About</router-link>        
    </div>
    <router-view/>  <!-- 路由出口。路由匹配到的组件将渲染在这里 -->
    

  </div>
  
</template>

<script type="text/javascript">    

export default{
    name:'example',
    props:{},
    model: {},
    mixins:[],   //data数据合并混入
    data:function(){
      return { 
        
      }; 
    },
    computed:{
        username:function(){
            console.log(`当前路由：${JSON.stringify(this.$route.params)}`);
            console.log(`当前路由Name：${JSON.stringify(this.$route.name)}`);
            return this.$route.params.username;
        },
    },
    methods:{},
    watch:{},
    components:{},
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