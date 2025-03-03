import Vue from 'vue';
import Router from 'vue-router';
import Portfolio from '../src/Portfolio.vue'; // Create this component

Vue.use(Router);

export default new Router({
  mode: 'history', // Enables clean URLs without #
  routes: [
    {
      path: '/tanknology/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
});