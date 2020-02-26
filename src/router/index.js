import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../components/User.vue'
import UserPosts from '../components/UserPosts.vue'
import UserProfile from '../components/UserProfile.vue'
import UserHome from '../components/UserHome.vue'

Vue.use(VueRouter)

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
        component: UserPosts
      },      
      { 
        // 当 /user/:id 匹配成功，(匹配空子路由)
        // UserHome 会被渲染在 User 的 <router-view> 中
        path: '',
        component: UserHome,
      },
    ]
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
