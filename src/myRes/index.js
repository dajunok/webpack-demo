import Vue from 'vue'
import Webpack from './Webpack.vue'
import HeaderTpl from './tpl.js'


var vm=new Vue({
    render: h => h(Webpack),
}).$mount("#app")




