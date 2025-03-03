import Vue from 'vue'
// import Portfolio from './Portfolio2.vue'
import Portfolio from './Portfolio.vue'
import router from './router';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Portfolio),
}).$mount('#app')
