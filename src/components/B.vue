<template>
  <div>
    <h3>组件B</h3>
    <C v-bind="$attrs" v-on="$listeners"></C>
  </div>
  
</template>

<script type="text/javascript">  
import C from "./C.vue";

export default{
    name:'B',
    props:{},
    model: {},
    data:function(){
      return { 
        
      }; 
    },
    computed:{},
    methods:{},
    watch:{},
    components:{
      C,
    },

}


</script>