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
      <hellocomponent></hellocomponent>
      <span v-once>这个将不会改变: {{ mes }}</span>
      <div v-html="'<h2>标题2</h2>'"></div>   <!-- 使用v-html指令更新元素的 innerHTML。可以按HTML语法渲染 -->
      <p v-on:[even]="mes='ok'">请点击我我会改变哦：{{mes}}</p> <!-- 使用中括号[]动态绑定事件 -->
      <p>当前时间：{{now}}</p><!-- 使用计算属性 -->
    </div>
    <!-- Class 与 Style 绑定 -->
    <div :class="'static active'">动态绑定class（表达式）</div>  <!-- 动态绑定class（表达式） -->
    <div :class="classstr">动态绑定class（字符串数据形式）</div>    <!-- 动态绑定class （字符串数据形式）-->
    <div class="static" :class="{active:isActive,'text-danger': hasError}">使用对象语法绑定class</div> <!-- 使用对象语法绑定class  -->
    <div :class="['static',{active:a===b}]">使用数组语法绑定class</div>  <!-- 使用数组、对象和表达式相结合的方式绑定class -->
    <div :class="[isActive ? activeClass : '', errorClass]">使用三元表达式绑定class</div>  <!-- 使用三元表达式绑定class -->
    <subcomponent class='baz' :age=60>自定义组件上使用 class 属性</subcomponent> <!-- 当在一个自定义组件上使用 class 属性时，这些 class 将被添加到该组件的根元素上面。这个元素上已经存在的 class 不会被覆盖。 -->
    <subcomponent :class="{active:isActive}" :age=60>自定义组件上使用 class 属性</subcomponent> 
    <!-- 绑定内联样式 -->
    
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
        even:'click',
        message:'页面加载于 ' + new Date().toLocaleString(),
        seen:false,
        unseen:true,
        todos: data,
        mes: 'Hello Vue.js!',
        roster:list,
        boss:{name:'mayun',age:50},
        classstr:'static active',
        isActive:true,
        hasError:false,
        a:'',
        b:'',
        activeClass:'active',
        errorClass:'error',
      };
    },
    methods:{
      reverseMessage: function () {
                      this.mes = this.mes.split('').reverse().join('')
                    }
    },
    computed:{ //计算属性
      now:function(){ return Date.now();},
    },
    watch:{ //侦听器
      mes:function(newMes,oldMes){
          alert('新值：'+newMes+'；旧值：'+oldMes);
      }
    },
    components:{
      subcomponent:SubComponent,
      hellocomponent:HelloWorld,
    },
    //下面是生命周期钩子回调
    beforeCreate:function(){
      alert('命周期钩子【beforeCreate】：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。');
    },
    created:function(){
      alert('命周期钩子【created】：在实例创建完成后被立即调用。');
    },
    beforeMount:function(){
      alert('命周期钩子【beforeMount】：在挂载开始之前被调用：相关的 render 函数首次被调用。');
    },

  }

  
</script>