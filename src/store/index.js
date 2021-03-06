import Vue from 'vue'
import Vuex from 'vuex'
import { DECREMENT_MUTATION } from '@/other/mutation-types'  //Mutation 常量事件类型导入
import * as types from '@/other/mutation-types'  //Mutation 常量事件类型导入
import School from './school.js'  //导入store状态管理模块School
import myPlugin from './myPlugin.js'  //导入store插件
import stateSnapshotPlugin from './stateSnapshotPlugin.js'  //导入store插件
import webSocketPlugin from './webSocketPlugin.js'  //导入store插件构建函数，该函数的返回值才是一个store插件。

Vue.use(Vuex)

let time1 = new types.currentDate().Format("yyyy-MM-dd");  //=> 2020-02-18
let time2 = new types.currentDate().Format("yyyy-MM-dd HH:mm:ss");  //=> 2020-02-18 16:57:28
console.log(`当前时间：${time1}   ${time2}`);
const moduleB={  //公司
  namespaced: true,
  state:{
    name:'电力燃料有限公司',
    address:'基业一路',
    telephone:'88888888',
    scale:200,
  },
  getters:{},
  mutations:{},
  actions:{},
  modules:{}
}
var socket="WebSocket简介：\n WebSocket协议在2008年诞生，2011年成为国际标准。\n 它的最大特点就是，服务器可以主动向客户端推送信息，\n 客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。";
const webPlugin=webSocketPlugin(socket);  //函数返回一个store插件

export default new Vuex.Store({
    strict: true,  //开启严格模式。在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
    plugins:[myPlugin,stateSnapshotPlugin,webPlugin],    //Store 插件，Vuex 的 store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子。
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
      //模拟开学流程
      reportDuty:false,  //报到状态
      homework:false,   //作业完成状态
      //websocket
      websocket:'',

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
    modifyWebsocket(state,socket){
      state.websocket=socket;
    },
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
    //模拟开学流程
    checkReport(state){
      state.reportDuty=true;  //学生报到
    },
    checkHomework(state){
      state.homework=true;    //检查作业
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
    //# 组合 Action  模拟开学流程
    completeReport({commit,state}){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          commit('checkReport');
          resolve(state.reportDuty);
        },2000);          
      });
    },
    completeHomework({dispatch,commit}){
      //store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise
      return dispatch('completeReport').then((rep)=>{
        if(rep){
          commit('checkHomework');
        }else{
          console.log("还没有报到！");
        }         
      });
    },

  },
  modules: {
    school:School,  //学校
    b:moduleB,  //公司
  }
})
