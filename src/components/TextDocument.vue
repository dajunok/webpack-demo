<template>
  <div>
    <p>年龄：{{age}}</p>
    <header>
        <slot name="header"></slot>   <!-- 具名插槽header -->
    </header>
    <main>
        <slot v-bind:user="user">后备内容</slot>       <!-- 一个不带 name 的 <slot> 出口会带有隐含的名字“default”。 -->
    </main>
    <footer>
        <slot name="footer" v-bind:user="user"></slot>   <!-- 具名插槽footer -->
    </footer>    
    <div>   <!-- 作用域插槽 -->
        <slot name="scope" v-bind:user="user">{{user.lastName}}</slot> 
    </div>
    <div>   <!-- 作用域插槽 -->
        <slot name="other" v-bind:user="user">{{user.lastName}}</slot> 
    </div>

  </div>
  
</template>

<script type="text/javascript">

export default{
    name:'textDocument',
    props:{
        age:{type:Number},
    },
    model: {},
    data:function(){
      return { 
        user:{lastName:'张',firstname:'保强'},
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
    mounted:function(){
        this.$emit('update:age',1234567);
    },
    beforeUpdate:function(){},
    updated:function(){},
    activated:function(){},
    deactivated:function(){},
    beforeDestroy:function(){},
    destroyed:function(){},
    errorCaptured:function(){},

}


</script>