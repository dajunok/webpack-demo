import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../components/User.vue'
import UserPosts from '../components/UserPosts.vue'
import UserProfile from '../components/UserProfile.vue'
import UserHome from '../components/UserHome.vue'
import School from '../components/School.vue'
import Teacher from '../components/Teacher.vue'

Vue.use(VueRouter)

function dynamicPropsFn(route){
  return {
    teacherName:route.params.name,
  };
}

const routes = [
  {
    path:'/home',
    name:'indexHome',
    component: Home,
  },
  {
    path:'/about',
    name:'indexAbout',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home/:userName/post/:userId',  //使用路由参数（params）：userName和:userId。提醒一下，当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
    name: 'home',  //path的别名
    component: Home,
  },
  {
    path: '/about/:userName',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {    
    path: '/shop',
    name: 'good',
  },
  {
    path:'/Table/:name/:length',
    name:'table',
  },  
  { //嵌套路由
    path: '/user/:id', component: User,
    children: [  //子路由
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'profile',
        component: UserProfile
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'posts',
        components: {  //嵌套命名视图
          default:UserPosts,
          helper:() => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        }
      },      
      { 
        // 当 /user/:id 匹配成功，(匹配空子路由)
        // UserHome 会被渲染在 User 的 <router-view> 中
        path: '',
        component: UserHome,
      },
    ]
  },
  {
    path: '/',
    components: {  //命名视图
      default: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      a: UserPosts,
      b: UserProfile
    }
  },
  //重定向：“重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b
  { path: '/a', redirect: '/b' },
  { path: '/c', redirect: {name:'good'} },
  { path: '/d', redirect: to => {
      console.log(to);  //to指向路由对象'/d'
      return {path:'/toTarget'};
    }
  },
  //别名：/f 的别名是 /g，意味着，当用户访问 /g 时，URL 会保持为 /g，但是路由匹配则为 /f，就像用户访问 /f 一样。
  { path: '/f', component: UserProfile, alias: '/g' },  
  //路由组件传参-------------
  { path: '/school/:name', component: School, props: true }, //如果 props 被设置为 true，route.params 将会被设置为组件属性。
  { // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
      path: '/schoolfull/:name',
      components: { default: School, tec: Teacher },
      props: { default: true, tec: false }
  },
  {//采用对象模式传参
      path:'/searchSchool',component:School,props: { name: 'LongHaiMiddleSchool' }
  },
  {//采用函数模式传参
      path:'/dynamic/:name',
      component:Teacher,
      props: dynamicPropsFn,  //动态回调函数传参
      meta: { requiresAuth: true },  //路由元信息
  },
  { //路由独享的守卫
    path: '/teacher',
    component: Teacher, 
    props: (route) => ({ teacherName: route.query.name }),  //URL /teacher?name=DuanXinLan 会将 {teacherName: 'vue'} 作为属性传递给 SearchUser 组件。
    beforeEnter:(to,from,next)=>{  //注册路由前置守卫
      console.log("路由独享守卫----'/teacher'路由前置守卫被触发");
      next(); 
    },
  },
  //模糊匹配
  {
    path:'/user-*',   // 会匹配以 `/user-` 开头的任意路径
  },
  {
    path:'*',   // 会匹配所有路径。通常用于客户端 404 错误。
  },

]

const router = new VueRouter({
  routes
})

export default router
