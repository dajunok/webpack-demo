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
    <!-- =====Class 与 Style 绑定======== -->
    <div :class="'static active'">动态绑定class（表达式）</div>  <!-- 动态绑定class（表达式） -->
    <div :class="classstr">动态绑定class（字符串数据形式）</div>    <!-- 动态绑定class （字符串数据形式）-->
    <div class="static" :class="{active:isActive,'text-danger': hasError}">使用对象语法绑定class</div> <!-- 使用对象语法绑定class  -->
    <div :class="['static',{active:a===b}]">使用数组语法绑定class</div>  <!-- 使用数组、对象和表达式相结合的方式绑定class -->
    <div :class="[isActive ? activeClass : '', errorClass]">使用三元表达式绑定class</div>  <!-- 使用三元表达式绑定class -->
    <subcomponent class='baz' :age=60>自定义组件上使用 class 属性</subcomponent> <!-- 当在一个自定义组件上使用 class 属性时，这些 class 将被添加到该组件的根元素上面。这个元素上已经存在的 class 不会被覆盖。 -->
    <subcomponent :class="{active:isActive}" :age=60>自定义组件上使用 class 属性</subcomponent> 
    <!-- ======绑定内联样式====== -->
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">绑定内联样式</div>
    <div :style="styleObject">使用对象绑定内联样式</div>
    <div :style="[styleObject,ovrStyle]">使用数组绑定内联样式</div>
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
    <!-- ============条件渲染========= -->
    <div> 
      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no!</h1>     
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
    <!-- =========列表渲染======= -->
    <ul>      
      <li v-for="item in items">{{item.message}}</li>
    </ul>
    <!-- --------------------------------------- -->
    <ul> <!-- 用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法 -->
      <li v-for="(item, index) of items">   
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    <!-- --------------------------------------- -->
    <ul id="v-for-object" class="demo"> <!-- 用 v-for 来遍历一个对象的属性。 -->
      <li v-for="value of object">
        {{ value }}
      </li>
    </ul>
    <!-- --------------------------------------- -->
    <div v-for="(value, name) in object"> <!-- 提供第二个的参数为 property 名称 (也就是键名) -->
      {{ name }}: {{ value }}
    </div>
    <!-- --------------------------------------- -->
    <div v-for="(value, name, index) in object"> <!-- 用第三个参数作为索引 -->
      {{ index }}. {{ name }}: {{ value }}
    </div>
    <!-- 对象变更检测注意事项 -->
    <div>
      <button @click='replaceItems'>替换items</button>
      <button @click='modify'>修改items[0]</button>
    </div>
    <!-- 显示过滤/排序后的结果 -->
    <div>
      <li v-for="n in evenNumbers">{{ n }}</li>   <!-- 使用计算属性 -->
    </div>
    <!-- --------------------------------- -->
    <div>
      <li v-for="n in evenf(numbers)">函数结果：{{ n }}</li> <!-- 使用带参数方法 -->
      <button @click="evenff(numbers)">带参数事件回调函数evenf(numbers)</button>
    </div>
    
  </div>
</template>


<script type="text/javascript">
  import Vue from 'vue';
  import SubComponent from './SubComponent.vue';  
  import HelloWorld from '@/components/father.vue';
  import _ from 'lodash';

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

  let data_1= [
      { message: 'Foo' },
      { message: 'Bar' }
    ];

  let data_2={
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
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
        items:data_1,     //列表渲染
        parentMessage: 'Parent',
        object:data_2, 
        numbers: [ 1, 2, 3, 4, 5 ,6],   
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
      replaceItems:function(){
          this.items=this.items.filter(item=>item.message.match(/New/));  //filter是非响应式，但使用原数组名替换后变成响应式。
      },
      modify:function(){
        //this.items[0]={message:'New'};          //使用数组下标修改数据是非响应式。(即不会立即在页面上刷新)
        //Vue.set(this.items, 0, {message:'New'});  //响应式。
        //this.items.splice(1,1,{message:'New'});   //响应式。(有趣的现象：响应式和非响应式搭配在一起时起到全部刷新的作用）)
        //this.object.age=20;   //非响应式
        Vue.set(this.object,'age',27); //响应式。
      },
      evenf: function (arr) {
        return arr.filter(num=>num % 3 === 0);
      },
      evenff:function(arr){
        arr.push(10);
      }
    },
    computed:{ //计算属性
      now:function(){ return Date.now();},      
      activeUsers:function(){   // 创建过滤器对象activeUsers
        return this.users.filter(user=>user.isActive);
      },
      evenNumbers:function(){
        return this.numbers.filter(num=>num%2===0);
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