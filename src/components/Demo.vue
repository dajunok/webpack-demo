<template>
  <div class="hello">
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <h1>{{ msg }}</h1>
    <p v-if="seen">现在你看到我了</p>
    <p v-else-if="unseen">你看不见我了</p>
    <p v-else>现在你看到她了</p>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
      <button v-on:click='reverseMessage'>逆转消息</button>
      <p>{{mes}}</p>
    </ol> 
    <ul>
          <li v-for="(value,key,index) in boss">{{key}}:{{value}}-----{{index}}</li>
    </ul> 
    <div>     
      <subcomponent v-bind:age=20  :size=80  fullname="zhangsan" >我是插槽{{mes}}</subcomponent>  <!--组件属性fullname静态赋值 -->
      <subcomponent v-bind:age=20  :size=80  :fullname="mes" >我是插槽{{mes}}</subcomponent>  <!--组件属性fullname动态赋值数据变量mes，而不是字符串'mes' -->
      <subcomponent :age.number=50 v-bind:fullname='boss.name'>我是插槽50</subcomponent> <!--组件属性fullname动态赋值，把boss对象的name键值name赋给它，如果是静态赋值则等于字符串'boss.name'-->
    </div>
    <div>
      <hello></hello>
    </div>

  </div>
  
</template>


<script type="text/javascript">
  import SubComponent from './SubComponent.vue';  
  import HelloWorld from '@/components/father.vue';

  let data=[
              { text: '学习 JavaScript' },
              { text: '学习 Vue' },
              { text: '整个牛项目' },
            ];
  let list=[
    {id:11,age:22,name:'jack'},
    {id:12,age:23,name:'rose'},
    {id:13,age:24,name:'neil'},
  ]

  export default{
    name:'Myconponent',
    props: {
      msg: String
    },
    data:function(){
      return {
        message:'页面加载于 ' + new Date().toLocaleString(),
        seen:false,
        unseen:true,
        todos: data,
        mes: 'Hello Vue.js!',
        roster:list,
        boss:{name:'mayun',age:50},
      };
    },
    methods:{
      reverseMessage: function () {
                      this.mes = this.mes.split('').reverse().join('')
                    }
    },
    components:{
      subcomponent:SubComponent,
      hello:HelloWorld,
    },
  }

  
</script>