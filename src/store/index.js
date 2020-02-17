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
  actions: {
    increment(context){
      context.commit('increment');
    },
    decrement({commit}){
      commit(DECREMENT_MUTATION);
    },
  },
  modules: {
  }
})
