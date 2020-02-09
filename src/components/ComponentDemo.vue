<template>
  <div class='componentDemo'>
    <div>{{item.id}}：{{item.username}}----index：{{index}}</div>
    <button v-on:click="$emit('remove')">remove</button> 
    <br>
    <slot></slot>  
    <h3>组件上使用v-model</h3>
    <input   type="checkbox" v-bind:checked="checked"  v-on:change="$emit('change', $event.target.checked)"> <!-- $event.target.checked -->
    <span>{{checked}}</span>

  </div>
</template>



<script type="text/javascript">

export default{
    name:'componentDemo',
    props:{
      item:{},
      index:'',
      checked: Boolean,
    },
    model: {
      prop: 'checked',
      event: 'change'
    },
    data:function(){
      return { 
        str:'OK',
      }; 
    },
    computed:{},
    methods:{
      
    },
    watch:{},
    components:{},

}


</script>