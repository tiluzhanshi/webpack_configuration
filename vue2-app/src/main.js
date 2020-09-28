import Vue from 'vue'
import App from './App.vue';

// import Acc from "./App.vue?vue&type=style&index=0&lang=css&";

console.log("aaa");
console.log(App);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
