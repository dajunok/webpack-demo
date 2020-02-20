export default function(store){
    console.log('完成store初始化');  // 当 store 初始化后调用
    store.subscribe((mutation,state)=>{
        console.log('暴露出每次 mutation 的钩子');  // 每次 mutation 之后调用
    });
}