import Vue from 'vue'
import Myconponent from '@/components/Demo.vue'
import html from './file.html'    //利用html-loader加载器以字符串形式导入HTML文件。
//const html=require('./file.html')   //利用html-loader加载器导入HTML文件。
import './style/index.css'
import './style/less.less'
import './style/scss.scss'
import './style/sass.sass'

//Node Package Manager (NPM)

import $ from 'jquery';

console.log($);
$('#first').click(function () {
    alert('hello');
});

//数组更新检测
var arr=Myconponent.data().items;
arr.push({ message: 'Good' });
console.log(arr[0]);
//替换数组(???替换不了)
var arrf=Myconponent.data().items.filter(item=>item.message.match(/Good/));
Myconponent.data().items=arrf;
console.log(Myconponent.data().items);
console.log(arrf);

new Vue({
    render: h => h(Myconponent,{
      props:{   //赋值组件定义的props
          msg:'Hello Word!',    //给属性msg赋值。
      },
    })
}).$mount('#app')







Vue.config.productionTip = false  //消息提示的环境配置，设置为开发环境或者生产环境
console.log("Running App version " + VERSION);  //打印全局变量VERSION
console.log(host);      //打印全局变量host，该全局变量通过webpack.DefinePlugin插件进行设置。
console.log(html);      //打印字符串html