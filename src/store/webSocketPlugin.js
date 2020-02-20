export default function webSocketPlugin(socket){
    return store=>{   //返回一个store插件
        store.commit('modifyWebsocket',socket);    //提交mutation 
        store.subscribe((mutation,state)=>{
            console.log(mutation.type);  // 每次 mutation 之后调用。（注意：插件内的提交不会调用）
        });   
    };
}