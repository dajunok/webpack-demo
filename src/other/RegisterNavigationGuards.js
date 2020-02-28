/*导航守卫：
    正如其名，vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。
    有多种机会植入路由导航过程中：全局的, 单个路由独享的, 或者组件级的。
    记住参数或查询的改变并不会触发进入/离开的导航守卫。你可以通过观察 $route 对象来应对这些变化，或使用 beforeRouteUpdate 的组件内守卫。
    每个守卫方法接收三个参数：
    to: Route: 即将要进入的目标 路由对象
    from: Route: 当前导航正要离开的路由
    next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
    next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
    next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
    next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
        你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的
         to prop 或 router.push 中的选项。
    next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
    
    完整的导航解析流程
    1、导航被触发。
    2、在失活的组件里调用离开守卫。
    3、调用全局的 beforeEach 守卫。
    4、在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
    5、在路由配置里调用 beforeEnter。
    6、解析异步路由组件。
    7、在被激活的组件里调用 beforeRouteEnter。
    8、调用全局的 beforeResolve 守卫 (2.5+)。
    9、导航被确认。
    10、调用全局的 afterEach 钩子。
    11、触发 DOM 更新。
    12、用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
*/
export default function(router){
    //1、全局前置守卫：当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。
    router.beforeEach((to,from,next)=>{  //使用 router.beforeEach 注册一个全局前置守卫
        console.log("全局前置守卫A被触发");
        next();  //进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
    });
    router.beforeEach((to,from,next)=>{  //使用 router.beforeEach 注册一个全局前置守卫
        console.log("全局前置守卫B被触发");
        next(); 
        //next(false);  //中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
        //
    });
    //2、全局解析守卫：用 router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
    router.beforeResolve((to,from,next)=>{
        console.log("全局解析守卫被触发");
        next(); 
    });
    //3、全局后置钩子：用router.afterEach注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身
    router.afterEach((to, from) => {
      console.log("全局后置钩子被触发");
    });

}