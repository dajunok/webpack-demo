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
    <button @click="printPathMatch">打印PathMatch</button>
    <div>
        <router-link to="/home/zhangSan/post/002">Home</router-link> |
        <router-link to="/home/wuba/post/003">Home-B</router-link> |
        <router-link :to="`/about/${guestName}`">About</router-link> |
        <router-link :to="{name:'table',params:{length:12,name:'bangon'}}">Table</router-link>|
        <router-link :to="{path:'/Chail',query:{length:12,name:'bangon'}}">Chail</router-link>|
        <router-link :to="{path:'Room',query:{length:12,name:'fangjian'}}">Room</router-link>|
        <router-link to="/test/home">Test</router-link>|
        <router-link to="/user/foo/profile">UserProfile</router-link>|
        <router-link to="/user/bar/posts">UserPosts</router-link>
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
        guestName:'zhaoLiu'
        
      }; 
    },
    computed:{
        username:function(){
            console.log(`当前路由：${JSON.stringify(this.$route.params)}`);
            console.log(`当前路由Name：${JSON.stringify(this.$route.name)}`);
            console.log(`路由hash值：${this.$route.hash}`);
            return this.$route.params.username;
        },
    },
    methods:{
        switchRoute:function(){  //切换路由到：http://webpack-demo.com:8080/web/router.html#/mtindex/detail?shopid=123456
            this.$router.push({
               //path: '/shop',      //传参数（ params相对应的是name  query相对应的是path）
               name:'good',         
               query:{shopid: 123456},               
               params:{shopname:'商品'},  //如果采用path，则params将被忽略
            });
            //this.$router.push('/location').catch(err => { console.log(err) });  //针对于路由跳转相同的地址报错问题解决方案
        },
        printRouteMessage:function(){
            this.routeQuery=this.$route.query;  //获取query对象
            this.routeParams=this.$route.params;  //获取params对象
        },
        printPathMatch(){
            console.log(`pathMatch：${this.$route.params.pathMatch}`);
        },
    },
    watch:{
        '$route'(to,from){ //# 响应路由参数的变化
            console.log("监控$route对象to：");
            console.log(to);
            console.log("监控$route对象from：");
            console.log(from);
            //console.log(`监控$route对象to：${JSON.stringify(to)}`);  //to: Route: 即将要进入的目标路由对象
            //console.log(`监控$route对象from：${JSON.stringify(from)}`); //from: Route: 当前导航正要离开的路由
        },
    },
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