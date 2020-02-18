import Vue from 'vue'
import Vuex from 'vuex'
import { DECREMENT_MUTATION } from '@/other/mutation-types'  //Mutation 常量事件类型导入
import * as types from '@/other/mutation-types'  //Mutation 常量事件类型导入

Vue.use(Vuex)

let time1 = new types.currentDate().Format("yyyy-MM-dd");  //=> 2020-02-18
let time2 = new types.currentDate().Format("yyyy-MM-dd HH:mm:ss");  //=> 2020-02-18 16:57:28
console.log(`当前时间：${time1}   ${time2}`);



export default new Vuex.Store({
  state: {
    count: 0,
    todos:[
      {id:1,text:'Web前端学习',done:true},
      {id:2,text:'Web后端学习',done:false},
      {id:3,text:'Web移到端学习',done:true},
    ],
    cart:{  //购物车
      items:['a','b','c'],
      added:function(){
        return this.items;
      },
    },
    order:{ //订单
      items:[],
      buyDate:'',
    }, 
    shop:{  //定义超市对象
        products:[],
        buyProducts:function(pro,succFun,faiFun){          
          if(pro.length>0){
            this.products=[...pro];
            succFun();
          }else{
            faiFun();
          }           
        }
    },

  },
  getters:{
    doneTodos:state=>{
      return state.todos.filter(todo=>todo.done);
    },
    doneTodosCount:(state,getters)=>{
      return getters.doneTodos.length;
    },
    getTodoById:(state)=>(id)=>{  //多个连续的箭头函数与柯里化
      return state.todos.find(todo=>todo.id===id);
    },    
  },
  mutations: {
    increment (state) {
      state.count++;
    },
    add(state,n){
      state.count+= n;
    },
    addObj(state,payload){
      state.count += payload.amount;
    },
    //使用常量替代 Mutation 事件类型
    [DECREMENT_MUTATION] (state){
        state.count--; 
    },
    //以下是购物车模拟案例：
    [types.CHECKOUT_REQUEST](state){
      state.cart.items.splice(0);  //清空购物车商品数组items
    },
    [types.CHECKOUT_SUCCESS](state,pro){
      state.order.items=[...pro];
      state.order.buyDate=new types.currentDate().Format("yyyy-MM-dd HH:mm:ss");
    },
    [types.CHECKOUT_FAILURE](state,savItems){
      state.cart.items=[...savItems];  //提交失败则恢复购物车。
    },
  },
  /* # Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，
    或者通过 context.state 和 context.getters 来获取 state 和 getters。当我们在之后介绍到 Modules 时，
    你就知道 context 对象为什么不是 store 实例本身了。
  */
  actions: {  //Action 提交的是 mutation，而不是直接变更状态。
    increment(context){
      context.commit('increment');
    },
    decrement({commit}){  //使用ES2015 的参数解构来简化代码（特别是我们需要调用 commit 很多次的时候）
      commit(DECREMENT_MUTATION);
    },
    incrementAsync({commit}){
      setTimeout(()=>{
        commit('increment');
      },2000);
    },
    addAsync({commit},n){  //Mutation异步触发：add(state,n)
      setTimeout(()=>{
        commit('add',n);
      },2000);
    },
    addObjAsync({commit},payload){
      setTimeout(()=>{
        commit('addObj',payload);
      },3000);
    },
    //模拟电子商城
    checkout ({ commit, state }, products) {
      // 把当前购物车的物品备份起来
      const savedCartItems = [...state.cart.added()];
      // 发出结账请求，然后乐观地清空购物车
      commit(types.CHECKOUT_REQUEST);
      // 购物 API 接受一个成功回调和一个失败回调
      state.shop.buyProducts(
        products,
        // 成功操作
        () => commit(types.CHECKOUT_SUCCESS,products),
        // 失败操作
        () => commit(types.CHECKOUT_FAILURE, savedCartItems)
      );
    },  

  },
  modules: {
  }
})
