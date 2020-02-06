<template>
  <div class='componentDemo'>
    <div>{{item.id}}：{{item.username}}----index：{{index}}</div>
    <button v-on:click="$emit('remove')">remove</button>    
  </div>

</template>



<script type="text/javascript">

export default{
    name:'componentDemo',
    props:{
      item:{},
      index:'',
    },
    data:function(){ return { }; },
    computed:{},
    methods:{},
    watch:{},
    components:{},

}


</script>