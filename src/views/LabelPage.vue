<template>
  <div>
    <h1># &lt;a&gt;标签</h1>
    <p>download 属性定义了下载链接的地址。href 属性必须在 &lt;a&gt; 标签中指定。<br>属性同样可以指定下载文件的名称。<br>文件名称没有限定值，浏览器会自动在文件名称末尾添加该下载文件的后缀 (.img, .pdf, .txt, .html, 等)。</p>    
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