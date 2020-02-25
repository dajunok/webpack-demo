<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  //路由守卫钩子函数(组件内的守卫)
  beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        console.log("Home组件内导航守卫【beforeRouteEnter】：在渲染该组件的对应路由被 confirm 前调用");
        console.log(to);
        console.log(from);
        next(vm=>{
            vm.name = "我是新名字"
            console.log("vm：");
            console.log(vm);
        });
        
    },
    beforeRouteUpdate (to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        console.log("Home组件内导航守卫【beforeRouteUpdate】：在当前路由改变，但是该组件被复用时调用");
        console.log(to);
        console.log(from);
        next()
    },
    beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.log("Home组件内导航守卫【beforeRouteLeave】：导航离开该组件的对应路由时调用");
        console.log(to);
        console.log(from);
        next()
    },
}
</script>
