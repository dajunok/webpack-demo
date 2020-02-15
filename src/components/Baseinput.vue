<template>
  <label>
    {{label}}
    {{$attrs.placeholder}}
    {{$attrs["data-date-picker"]}}
    <input v-bind="$attrs"/>
  </label>
  
</template>

<script type="text/javascript">

export default{
    name:'base-input',
    props:["label"],
    inheritAttrs:false,   //禁用 Attribute 继承。注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定。
    model: {},
    data:function(){
      return { 
        
      }; 
    },
    computed:{},
    methods:{},
    watch:{},
    components:{},    
    mounted: function() {  //生命周期钩子，实例被挂载后调用。
        console.log(this.$attrs);
    },

}


</script>