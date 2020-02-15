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
      <B @changeMyData="changeMyData" :myData="myData" fullName="涂胜利"></B>
    </div>
    <!-- .sync 修饰符 
      $emit(update: prop, "newPropVulue")  这个模式，使子组件向父组件传达：更新属性，
      并抛出新的属性值.sync 修饰符 是以上模式的简写
    -->
    <text-document :age="age" v-on:update:age="(res)=>age=res" ></text-document>
    <text-document :age="age" v-on:update:age="age=$event" ></text-document>
    <text-document :age.sync="age" ></text-document>
    <!-- 插槽 -->
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
    <!--5、 解构插槽 Prop -->


  </div>
</template>


<script type="text/javascript">
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

export default{
  name:'blogpost',
  data:function(){
    return {
      posts:postsdata,
      postFontSize:1,
      myData: "100",
      age:0,
      fullname:'涂阳',
    }
  },
  methods:{
    computFontSize:function(size){
       this.postFontSize+=size;
    },
    changeMyData:function(val) {
      this.myData = val;
    },
  },
  components:{
    blogComponent:BlogComponent,
    propComponent:PropComponent,
    baseinput:Baseinput,
    B:B,
    'text-document':TextDocument,
  }
}

  
</script>