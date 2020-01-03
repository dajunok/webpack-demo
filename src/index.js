import Vue from 'vue'
import App from './appTest.vue'
 
const root = document.createElement('div');
document.body.appendChild(root);
 
new Vue({
    render:(h) => h(App)        /*渲染内容*/
}).$mount(root)                 /*挂载元素*/