<template>
  <div>
    <h1># 路由器案例</h1>
    <ul># 路由查询参数query：
        <li v-for="(val,key) in routeQuery">{{key}}：{{val}}</li>
    </ul>
    <ul># 路由参数params：
        <li v-for="(val,key) in routeParams">{{key}}：{{val}}</li>
    </ul>
    <button @click="switchRoute">切换路由：mtindex/detail</button>
    <button @click="printRouteMessage">打印当前路由信息</button>
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
        routeQuery:{},
        routeParams:{},
      }; 
    },
    computed:{
        username:function(){
            console.log(`当前路由：${JSON.stringify(this.$route.params)}`);
            console.log(`当前路由Name：${JSON.stringify(this.$route.name)}`);
            return this.$route.params.username;
        },
    },
    methods:{
        switchRoute:function(){  //切换路由到：http://webpack-demo.com:8080/web/router.html#/mtindex/detail?shopid=123456
            this.$router.push({
               //path: '/mtindex',      //传参数（ params相对应的是name  query相对应的是path）
               name:'mtindex',         
               //query:{shopid: 123456},               
               params:{shopname: '商品'}
            });
            //this.$router.push('/location').catch(err => { console.log(err) });  //针对于路由跳转相同的地址报错问题解决方案
        },
        printRouteMessage:function(){
            this.routeQuery=this.$route.query;  //获取query对象
            this.routeParams=this.$route.params;  //获取params对象
        },
    },
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