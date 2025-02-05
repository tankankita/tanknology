import Vue from 'vue'
// import Portfolio from './Portfolio2.vue'
import Sid from './components/Sid.vue'
import router from './router';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Sid),
}).$mount('#app')
