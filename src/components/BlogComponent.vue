<template>
  <div class="blog-post">
    <h3>{{ post.title }}</h3>
    <div v-html="post.content"></div>
    <!-- 1、使用事件抛出一个值  -->
    <button v-on:click="$emit('enlarge-text',0.1)">Enlarge text</button>   <!-- 自定义事件组件，$event就是$emit 的第一个参数 1.不使用圆括号，event被自动当作实参传入 2.使用圆括号，必须显式的传入event对象，如果不传入可能最终找到的是全局的window .event --> 
    <!-- 2、自定义事件也可以用于创建支持 v-model 的自定义输入组件。-->
    <input type="text" v-bind:value="value" v-on:input="$emit('input',$event.target.value)">
    <slot></slot> <!-- 3、通过插槽分发内容 -->
  </div>
  

</template>

<script type="text/javascript">

export default{
  name:'blogComponent',
  props:['post','value'],
  model: {},
  data:function(){
    return { 
      
    }; 
  },
  computed:{},
  methods:{},
  watch:{},
  components:{},
}
  
</script>