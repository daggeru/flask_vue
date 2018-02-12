import Vue from 'vue';
import Router from 'vue-router';

import RegistrationForm from './components/RegistrationForm.vue';
import Login from './components/Login.vue';
import Home from './components/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationForm
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
});
