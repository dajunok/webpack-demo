<template>
  <div class="Blog">
    <!-- ================组件基础================= -->
    <!-- 1、通过 Prop 向子组件传递数据。2、使用事件抛出一个值  -->
    <div :class="'font'" :pD="posts" :style="{fontSize: postFontSize + 'em'}" > <!-- 将数据对象posts绑定到自定义属性pD -->
      <blogComponent 
          v-on:enlarge-text="postFontSize += $event" 
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:post="post"
      ></blogComponent> 
    </div>
    <div :class="'font1'" :pD="posts" :style="{fontSize: postFontSize + 'em'}" > <!-- 将数据对象posts绑定到自定义属性pD -->
      <!-- 1.不使用圆括号，event被自动当作实参传入 2.使用圆括号，必须显式的传入$event对象，如果不传入可能最终找到的是全局的window .event -->
      <blogComponent 
          v-on:enlarge-text="computFontSize($event)" 
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:post="post"
      ></blogComponent> 
    </div>
    <!-- 通过插槽分发内容 -->
    <blogComponent
      v-on:enlarge-text="computFontSize($event)" 
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:post="post">
      通过插槽分发内容</blogComponent>
    <!--1、 组件可以接受任意的 attribute，而这些 attribute 会被添加到这个组件的根元素上。 -->
    <propComponent :dataObj="posts"></propComponent>
    <!--2、 替换/合并已有的 Attribute -->
    <propComponent :dataObj="posts" class="date-picker-theme-dark"></propComponent> 
    <!--3、 inheritAttrs: false  禁用 Attribute 继承。 如果你不希望组件的根元素继承 attribute，你可以在组件的选项中设置 inheritAttrs: false。-->
    <!--4、 $attrs属性 当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。 -->
    <baseinput 
        label="姓名" 
        class="username-input" 
        placeholder="Enter your username" 
        data-date-picker="activated">
    </baseinput>
    <!-- 将原生事件绑定到组件：$listeners 属性 -->
    <div>
      <h2>组件A 数据项:{{myData}}</h2>
      <B @changeMyData="changeMyData($event)" :myData="myData" fullName="涂胜利"></B> <!-- 当回调函数只出入$event实参时，在此处可以省略$event不填，系统会自动传入 -->
    </div>
    <!-- .sync 修饰符 
      $emit(update: prop, "newPropVulue")  这个模式，使子组件向父组件传达：更新属性，
      并抛出新的属性值.sync 修饰符 是以上模式的简写
    -->
    <text-document :age="age" v-on:update:age="(res)=>age=res" ></text-document>
    <text-document :age="age" v-on:update:age="age=$event" ></text-document>
    <text-document :age.sync="age" ></text-document>
    <!-- ==============插槽============================= -->
    <text-document :age.sync="age" >{{fullname}}</text-document>  
    <!--1、 插槽的后备内容 -->
    <text-document :age.sync="age" ></text-document>
    <!--2、 具名插槽 -->
    <text-document :age.sync="age" >
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </text-document>
    <!--3、 作用域插槽。 让插槽内容能够访问子组件中才有的数据是很有用的。-->
    <text-document :age.sync="age" >
      <template v-slot:scope="slotpro">
        <h1>{{ slotpro.user.lastName }}{{slotpro.user.firstname}}</h1>
      </template>
    </text-document>
    <!--4、 独占默认插槽的缩写语法 -->
    <text-document :age.sync="age" >
      <template v-slot="slotdef">
        <h1>{{ slotdef.user.lastName }}{{slotdef.user.firstname}}----独占默认插槽的缩写语法</h1>
      </template>
    </text-document>
    <!--5、 解构插槽 Prop 。作用域插槽的内部工作原理是将你的插槽内容包括在一个传入单个参数的函数里-->
    <text-document :age.sync="age" >
      <template v-slot="{user}">  
        <h1>{{ user.lastName }}{{user.firstname}}----解构插槽 Prop</h1>
      </template>
    </text-document>
    <!-- -------------------------------------- -->
    <text-document :age.sync="age" >
      <template v-slot="{user:person}">  
        <h1>{{ person.lastName }}{{person.firstname}}----使用别名解构插槽 Prop</h1>
      </template>
    </text-document>
    <!-- -------------------------------------- -->
    <text-document :age.sync="age" >
      <template v-slot="{guest={fullname:'张万三'}}">  
        <h1>{{ guest.fullname }}----给没有定义的prop使用默认值，解构插槽 Prop</h1>
      </template>
    </text-document>
    <!--6、 动态插槽名 。动态指令参数也可以用在 v-slot 上，来定义动态的插槽名：-->
    <text-document :age.sync="age" >
      <template v-slot:[dynamicSlotName]>  
        <h1>动态插槽名{{dynamicSlotName}}</h1>
      </template>
    </text-document>
    <!--7、 具名插槽的缩写 。
           跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 #。
           例如 v-slot:header 可以被重写为 #header：-->
    <text-document :age.sync="age" >
      <template #other>  
        <h1>具名插槽的缩写</h1>
      </template>
    </text-document>
    <!-- =================动态组件 & 异步组件============== -->
    <!--1、 在动态组件上使用 keep-alive -->
    <button @click="chComponent('Home')">Home</button>
    <button @click="chComponent('Posts')">Posts</button>
    <button @click="chComponent('Archive')">Archive</button>
    <keep-alive> <!-- 失活的组件将会被缓存！-->
      <component v-bind:is="currentTabComponent" :age="20" :item="{id:'001',username:'zhYi',isActive:true}"></component>
    </keep-alive>
    <!--2、 可复用性 & 组合 -->
    <h1 @click="hello">年龄：{{age}}，电脑：{{computer}}</h1>
    <!-- ===================过滤器========================== -->
    <h3># 过滤器</h3>
    <input type="text" v-model="filterStr">
    <p>{{filterStr|capitalize}}</p>
    


  </div>
</template>


<script type="text/javascript">
import SubComponent from '@/components/SubComponent.vue';  
import HelloWorld from '@/components/father.vue';
import ComponentDemo from '@/components/ComponentDemo.vue';
import BlogComponent from '@/components/BlogComponent.vue'; 
import PropComponent from '@/components/PropComponent.vue';
import Baseinput from "@/components/Baseinput.vue";
import B from "@/components/B.vue";
import TextDocument from "@/components/TextDocument.vue";





let postsdata=[
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ];

//选项合并
var son={
  data:function(){
    return {
      age:20,
      computer:'台式',
    }    
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  },
}

export default{
  name:'blogpost',
  mixins:[son],   //data数据合并混入
  data:function(){
    return {
      posts:postsdata,
      postFontSize:1,
      myData: "100",
      age:0,
      fullname:'涂阳',
      dynamicSlotName:'other',
      currentTabComponent:"",
      filterStr:'',
    }
  },
  methods:{
    computFontSize:function(size){
       this.postFontSize+=size;
    },
    changeMyData:function(val) {
      this.myData = val;
    },
    chComponent:function(componentName){
      if(componentName==="Home"){
        this.currentTabComponent="subcomponent";
      }else if(componentName==="Posts"){
        this.currentTabComponent="hellocomponent";
      }else if(componentName==="Archive"){
        this.currentTabComponent="componentDemo";
      }
    },
  },
  filters:{
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  components:{
    subcomponent:SubComponent,
    hellocomponent:HelloWorld,
    componentDemo:ComponentDemo,
    blogComponent:BlogComponent,
    propComponent:PropComponent,
    baseinput:Baseinput,
    B:B,
    'text-document':TextDocument,
  },
}

  
</script>