<template>
  <div>
    <!-- 单一状态树 State -->
    <h1>count：{{count}}----{{num}}----{{countAlias}}----{{countPlusLocalState}}</h1>
    
  </div>
  
</template>

<script type="text/javascript">
    import { mapState } from 'vuex';  //可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键


export default{
    name:'example',
    props:{},
    model: {},
    mixins:[],   //data数据合并混入
    data:function(){
      return { 
        localCount:100,
      }; 
    },
    computed:{
        count:function () {  //使用原生态状态选项
            return this.$store.state.count;
        },
        // 使用对象展开运算符“...”将状态对象混入到外部对象中
        ...mapState({  //可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键，这里的...不是省略号了,是对象扩展符。        
            num:state => state.count,  // 箭头函数可使代码更简练
            countAlias: 'count',       // 传字符串参数 'count' 等同于 `state => state.count`
            countPlusLocalState (state) {   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
              return state.count + this.localCount
            },
        }),
    },
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