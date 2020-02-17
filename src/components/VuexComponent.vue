<template>
  <div>
    <!-- 单一状态树 State -->
    <h1>count：{{count}}----{{num}}----{{countAlias}}----{{countPlusLocalState}}</h1>
    <!-- Getter 。从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数-->
    <span>从 store 中的 state 中派生出一些状态，对列表进行过滤计数：{{doneTodoCount}}-------{{doneTodoNum}}</span><br>
    <p>通过方法访问：{{myTodo.text}}------{{myDoneCount}}----{{myTodoId(2).text}}</p>
    <!-- # Mutation。
        更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：
        每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
        这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数 -->
    <h1># Mutation</h1>
    <!-- 1、提交载荷（Payload） -->
    <button @click='commitCount(10)'>提交状态count</button><br>
    <button @click='commitObj(localObje)'>提交状态对象</button><br>
    <button @click='DECREMENT_MUTATION'>递减状态count</button><br> <!-- 使用常量替代 Mutation 事件类型 -->
    <button @click='decrement'>decrement递减状态count</button><br> <!-- 使用常量替代 Mutation 事件类型,并且使用别名 -->
    <h1># Action</h1>
    


    
  </div>
  
</template>

<script type="text/javascript">
    import { mapState } from 'vuex';    //可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键
    import {mapGetters} from 'vuex';    //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
    import {mapMutations} from 'vuex';  //使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）
    import { DECREMENT_MUTATION } from '@/other/mutation-types'  //Mutation 常量事件类型导入


export default{
    name:'example',
    props:{},
    model: {},
    mixins:[],   //data数据合并混入
    data:function(){
      return { 
        localCount:100,
        localObje:{name:'载荷对象',amount:50},
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
        doneTodoCount(){
            return this.$store.state.todos.filter(todo=>todo.done).length;
        },
        doneTodoNum(){
            return this.$store.getters.doneTodosCount;
        },
        myTodo:function(){return this.$store.getters.getTodoById(2);},
        //mapGetters 辅助函数
        ...mapGetters({
            myTodoId:'getTodoById',
            myDoneCount:'doneTodosCount',
        }),

    },
    methods:{
        commitCount(num){
            this.$store.commit('add',num);  //向 store.commit 传入额外的参数num，即 mutation 的 载荷（payload）
        },
        commitObj(obj){
            this.$store.commit('addObj',obj); 
        },
        //使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）
        ...mapMutations({
            DECREMENT_MUTATION,  //使用常量替代 Mutation 事件类型
            decrement:DECREMENT_MUTATION,  //使用常量替代 Mutation 事件类型,并且使用别名
        }),
    },
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