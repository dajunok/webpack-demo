<template>
  <div>
    <!-- 单一状态树 State -->
    <h1>count：{{count}}----{{num}}----{{countAlias}}----{{countPlusLocalState}}</h1>    
    <!-- Getter 。从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数-->
    <h1># Getter</h1>
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
    <!-- Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，
        或者通过 context.state 和 context.getters 来获取 state 和 getters。当我们在之后介绍到 Modules 时，
        你就知道 context 对象为什么不是 store 实例本身了。 -->
    <!-- 1、分发 Action -->
    <button @click='incrementAsync'>action内部执行异步操作：两秒后触发递增Count</button><br>
    <button @click='addAsync(50)'>以载荷带类型参数形式分发：两秒后触发递 </button><br>
    <button @click='addObjAsync(localObje)'>对象参数形式分发：叁秒后触发递</button><br>
    <ul v-if="cart.items.length">
        我的购物车：
        <li v-for="iteam of cart.items">{{iteam}}</li>
    </ul>
    <ul v-if="order.items.length">
        我的订单：
        <li v-for="iteam of order.items">{{iteam}}</li>
    </ul>
    <button v-on:click="checkShop(products)">购买商品</button><br>
    <!-- # 组合 Action -->
    <h3># 组合 Action</h3>
    <p>报到状态：{{reportDuty}}-------------是否检查作业：{{homework}}</p>
    <button v-on:click="complete">完成报到与作业检查</button><br>
    <h1># Module</h1>
    <p>学校名称：{{school}}----------{{getSchool}}----------公司名称：{{corporation}}</p>
    <!-- # 插件 
        Vuex 的 store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子。Vuex 插件就是一个函数，它接收 store 作为唯一参数：
    -->
    <h1># Store 插件</h1>
    <p style="white-space: pre-wrap;">{{websocket}}</p>

    


    
  </div>
  
</template>

<script type="text/javascript">
    import { mapState } from 'vuex';    //可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键
    import {mapGetters} from 'vuex';    //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
    import {mapMutations} from 'vuex';  //使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）
    import { mapActions } from 'vuex';  //或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）
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
        products:['苹果','梨子','香蕉','冬枣'],
      }; 
    },
    computed:{
        count:function () {  //使用原生态状态选项
            return this.$store.state.count;
        },
        school:function(){
            return this.$store.state.school.name;
        },
        // 使用对象展开运算符“...”将状态对象混入到外部对象中
        ...mapState({  //可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键，这里的...不是省略号了,是对象扩展符。        
            num:state => state.count,  // 箭头函数可使代码更简练
            corporation:state=>state.b.name,
            countAlias: 'count',       // 传字符串参数 'count' 等同于 `state => state.count`
            countPlusLocalState (state) {   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
              return state.count + this.localCount
            },
            cart:'cart',
            order:'order',
            reportDuty:'reportDuty',  //报到状态
            homework:'homework',   //作业完成状态 
            websocket:'websocket',             
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
            getSchool:'school/getName',
            
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
        //mapActions 辅助函数
        ...mapActions({
            incrementAsync:'incrementAsync',
            addAsync:'addAsync',
            addObjAsync:'addObjAsync',
            checkShop:'checkout',
            complete:'completeHomework',
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