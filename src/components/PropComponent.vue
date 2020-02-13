<template>
  <div class="form-control">
    <h3>非Prop的Attribute</h3>
  </div>
  
</template>

<script type="text/javascript">

export default{
    name:'propComponent',
    inheritAttrs:false,   //禁用 Attribute 继承。注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定。
    props:{},
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