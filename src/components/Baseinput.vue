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