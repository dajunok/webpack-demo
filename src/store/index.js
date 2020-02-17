import Vue from 'vue'
import Vuex from 'vuex'
import { DECREMENT_MUTATION } from '@/other/mutation-types'  //Mutation 常量事件类型导入

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos:[
      {id:1,text:'Web前端学习',done:true},
      {id:2,text:'Web后端学习',done:false},
      {id:3,text:'Web移到端学习',done:true},
    ],

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
  },
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

  },
  modules: {
  }
})
