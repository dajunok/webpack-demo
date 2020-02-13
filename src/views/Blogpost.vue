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
    <!-- 3、在组件上使用v-model -->
    

  </div>
</template>


<script type="text/javascript">
import BlogComponent from '@/components/BlogComponent.vue'  

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
    }
  },
  methods:{
    computFontSize:function(size){
       this.postFontSize+=size;
    }
  },
  components:{
    blogComponent:BlogComponent
  }
}

  
</script>