import Router from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Login from '../components/Login.vue';

let router = new Router({
  routes: [
    {
      path: '/',

      component: HomePage
    },
    {
      path: '/login',

      component: Login
    }
  ]
});

export default router;
