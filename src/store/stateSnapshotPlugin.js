const _ = require('lodash');

//创建一个state快照插件。
export default store=>{  
  let prevState = _.cloneDeep(store.state);
  console.log(`state拷贝：${JSON.stringify(prevState)}`);
  store.subscribe((mutation, state) => {
    let nextState = _.cloneDeep(state);
    // 比较 prevState 和 nextState...
    // 保存状态，用于下一次 mutation    
    prevState = nextState
    console.log(mutation.type); // 每次 mutation 之后调用。（注意：插件内的提交不会调用）
    console.log(`提交mutation后state拷贝：${JSON.stringify(prevState)}`);
  }); 
}