<template>
  <div class="hello">
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <h1>{{ msg }}</h1>
    <p v-if="seen">现在你看到我了</p>
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
  </div>
  
</template>


<script type="text/javascript">
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
        seen:true,
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
  }

  
</script>