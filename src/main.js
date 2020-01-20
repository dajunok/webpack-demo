import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import html from './file.html'    //利用html-loader加载器以字符串形式导入HTML文件。
//const html=require('./file.html')   //利用html-loader加载器导入HTML文件。
import './style/index.css'
import './style/less.less'
import './style/scss.scss'
import './style/sass.sass'

const $ = require('jquery');

console.log($);
$('#first').click(function () {
    alert('hello');
});




Vue.config.productionTip = false  //消息提示的环境配置，设置为开发环境或者生产环境
console.log("Running App version " + VERSION);  //打印全局变量VERSION
console.log(host);      //打印全局变量host，该全局变量通过webpack.DefinePlugin插件进行设置。
console.log(html);      //打印字符串html


new Vue({
  router,       //挂载将路由器到根元素'#app'下，挂载后就可以在'#app'对应的元素下通过<router-link>标签使用了。
  store,
  render: h => h(App)   //使用render函数渲染App组件来创建HTML，类似于template选项功能。
}).$mount('#app')
