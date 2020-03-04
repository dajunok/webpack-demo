<template>
  <div>
    <h1># &lt;a&gt;标签</h1>    
    <a :href="url+'xc-4.jpg'" download="清凉夏天">点击下载图片</a>
  </div>
  
</template>

<script type="text/javascript">

export default{
    name:'label',
    props:{
        url:String,
    },
    model: {},
    mixins:[],   //data数据合并混入
    data:function(){
      return { 
        
      }; 
    },
    computed:{},
    methods:{},
    watch:{},
    components:{},
    // 生命周期钩子
    beforeCreate:function(){},
    created:function(){},
    beforeMount:function(){},
    mounted:function(){},
    beforeUpdate:function(){},
    updated:function(){},
    activated:function(){},
    deactivated:function(){},
    beforeDestroy:function(){},
    destroyed:function(){},
    errorCaptured:function(){},

}


</script>