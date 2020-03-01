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
        <router-link :to="routeObj">Room</router-link>|
        <router-link to="/test/home">Test</router-link>|
        <router-link to="/user/foo/profile">UserProfile</router-link>|
        <router-link to="/user/bar/posts">UserPosts</router-link>|
        <router-link to="/user/foo">匹配空子路由</router-link><br><br>
        <h2># router.replace(...)</h2>
        <!-- # router.replace(location, onComplete?, onAbort?) 
            跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 
            替换掉当前的 history 记录。-->
        <router-link to="/about/etong" replace>替换当前路由（声明式）</router-link>|  <!-- 设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录。 -->
        <button @click="replaceRoute('/replace/route')">替换当前路由（编程式）--字符串参数</button>|
        <button @click="replaceRoute(routeObj)">替换当前路由（编程式）--对象参数</button>
        <h2># router.go(n)</h2>
        <button @click="hisGo(1)">》前进一步</button>| <!-- 在浏览器记录中前进一步，等同于 history.forward() -->
        <button @click="hisGo(-1)">》后退一步</button>| <!-- 在浏览器记录中后退一步，等同于 history.back() -->
        <button @click="hisGo(3)">前进三步</button>| <!-- 前进 3 步记录 -->
        <button @click="hisGo(-100)">后退100步</button><!--  如果 history 记录不够用，那就默默地失败呗 -->
        <h2># 命名视图</h2>
        <router-link to="/">命名视图</router-link><br>
        <h2># 重定向和别名</h2>
        <!--1、重定向redirect  -->
        <router-link to="/a">重定向a=>b</router-link>|
        <router-link to="/c">重定向c=>good</router-link>|
        <router-link to="/d">重定向d=>toTarget</router-link>|
        <h2>路由组件传参</h2>
        <router-link to="/school/ChangHongSchool">路由组件传参</router-link>|
        <router-link to="/schoolfull/LiXiangSchool">路由组件传参--命名视图</router-link>|
        <router-link to="/searchSchool">路由组件对象传参</router-link>|
        <router-link to="/dynamic/WangMeiChun">动态函数传参</router-link>|        
        <router-link to="/teacher?name=DuanXinLan">动态函数传参--查询参数</router-link>|
        <router-link to="/login">登录</router-link>|
        <router-link to="/asyncComponent">异步按需加载</router-link>|
        <button @click="$fn">字符串命名函数</button>|


    </div> 
    <transition mode="out-in">  
        <router-view class="view one" ></router-view>
    </transition> 
        <router-view class="view two" name="a"></router-view>
        <router-view class="view three" name="b"></router-view>
        <router-view class="view three" name="tec"></router-view>
    <br><br><br>  
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
        guestName:'zhaoLiu',
        routeObj:{path:'Room',query:{length:12,name:'fangjian'}},        
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
        replaceRoute(path){
            this.$router.replace(path);
        },
        hisGo(n){
            this.$router.go(n);  //这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。
        },
        '$fn'(){
            console.log('我是$fn函数');
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



<style>
    .v-enter{
      opacity:0;
    }
      .v-enter-to{
        opacity:1;
      }
      .v-enter-active{
        transition:1s;
      }
    .v-leave{
      opacity:1;
    }
    .v-leave-to{
      opacity:0;
    }
    .v-leave-active{
      transition:2s;
    }
</style>