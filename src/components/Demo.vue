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
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">绑定内联样式</div>
    <div :style="styleObject">使用对象绑定内联样式</div>
    <div :style="[styleObject,ovrStyle]">使用数组绑定内联样式</div>
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
    <!-- 条件渲染 -->
    <div> 
      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>     
    </div>
    <!-- --------------------------------------- -->
    <div v-if="Math.random() > 0.5">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>
    <!-- --------------------------------------- -->
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    <!-- --------------------------------------- -->
    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>    
    <!-- 用 key 管理可复用的元素 -->
    <!-- --------------------------------------- -->
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input"> <!-- 添加一个具有唯一值的 key 属性 -->
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input"> <!-- 添加一个具有唯一值的 key 属性 -->
    </template>
    <button @click='toggleFun'>Toggle login type</button>
    <!-- v-show vs v-if 。 v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。-->
     <template v-show="ok">
      <h1>v-show</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template> 
    <!-- v-if 与 v-for 嵌套使用-------------- -->    
    <ul v-if="shouldShowUsers"> 
      <li v-for="user in users"  :key="user.id">
        {{ user.username }}
      </li>
    </ul>
    <!-- v-if 与 v-for 一起使用-----------v-for 具有比 v-if 更高的优先级。 -->
    <ul> 
      <li v-if="shouldShowUsers" v-for="user in users"  :key="user.id">
        {{ user.username }}    ------v-if 与 v-for 一起使用
      </li>
    </ul>
    <!-- v-for与 过滤器（filter） 一起使用-->
    <ul>
      <li v-for="user in activeUsers" :key="user.id">  <!-- 使用过滤器：activeUsers -->
        {{ user.username }}   ------v-for与 过滤器（filter） 一起使用
      </li>
    </ul>
    <!-- --------------------------------------- -->
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
  ];

  let userdata=[
    {id:'001',username:'zhYi',isActive:true},
    {id:'002',username:'zhEr',isActive:true},
    {id:'003',username:'zhSan',isActive:false},
    {id:'004',username:'zhSi',isActive:false}
  ]


  let styObj={
    color:'green',
    fontSize:30+'px'
  };
  let overiSty={
    color:'blue',
    position: 'absolute',
    left:'100px',
    width:'300px',
    height:'30px',
    background:'white'
  };



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
        activeColor:'red',
        fontSize:30,
        styleObject:styObj,
        ovrStyle:overiSty,
        awesome:false,
        type:'A',
        ok:true,
        loginType:'username',
        users:userdata,
        shouldShowUsers:true,
      };
    },
    methods:{
      reverseMessage: function () {
                      this.mes = this.mes.split('').reverse().join('')
                    },
      toggleFun:function(){
        if(this.loginType==='username'){
            this.loginType='Email';
        }else{
            this.loginType='username';
        }
      },
    },
    computed:{ //计算属性
      now:function(){ return Date.now();},      
      activeUsers:function(){   // 创建过滤器对象activeUsers
        return this.users.filter(user=>user.isActive);
      },
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