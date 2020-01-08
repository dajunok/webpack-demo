import Vue from 'vue'
import Webpack from './Webpack.vue'


var vm=new Vue({
    render: h => h(Webpack),
}).$mount("#app")


