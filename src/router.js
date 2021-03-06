import Vue from 'vue';
import Router from 'vue-router';

import Registro from './components/registro/registro.vue';
import Login from './components/login/login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'login',
      path: '/',
      component: Login,
    },
    {
      name: 'registro',
      path: '/register',
      component: Registro,
    },
  ]
})