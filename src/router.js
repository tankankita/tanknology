import Vue from 'vue';
import Router from 'vue-router';
import ForSid from '../src/components/Sid.vue'; // Create this component

Vue.use(Router);

export default new Router({
  mode: 'history', // Enables clean URLs without #
  routes: [
    {
      path: '/tanknology/for-sid',
      name: 'ForSid',
      component: ForSid
    }
  ]
});