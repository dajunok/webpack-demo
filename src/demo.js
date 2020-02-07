import Vue from 'vue'
import Myconponent from '@/components/Demo.vue'
import html from './file.html'    //利用html-loader加载器以字符串形式导入HTML文件。
//const html=require('./file.html')   //利用html-loader加载器导入HTML文件。
import './style/index.css'
import './style/less.less'
import './style/scss.scss'
import './style/sass.sass'
import ComponentDemo from '@/components/ComponentDemo.vue'


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
    }),
    components:{Myconponent,ComponentDemo}
}).$mount('#app');

new Vue({
    render: h => h(ComponentDemo,{
      class:"son",      
      domProps:{
          //innerHTML:'第二个挂载组件', //注意：赋值组件innerHTML属性，会导致组件所有子元素被覆盖。
      },
      props:{
        item:{id:'001',username:'zhYi',isActive:true},
        index:'1',
      },
    },  
    [ //添加子节点
      '先写一些文字!',//创建文本节点（所有子节点对应父节点的innerHTML属性值）
      h("span",{  //创建子节点对象
          class:"son",
          domProps:{
              innerHTML:'我是子对象span!'
          }
      }),
    ]),
}).$mount('#app1');






Vue.config.productionTip = false  //消息提示的环境配置，设置为开发环境或者生产环境
console.log("Running App version " + VERSION);  //打印全局变量VERSION
console.log(host);      //打印全局变量host，该全局变量通过webpack.DefinePlugin插件进行设置。
console.log(html);      //打印字符串html