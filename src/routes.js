import HomePage from './components/HomePage.vue';
import Login from './components/Login.vue';
import MainApplication from './components/MainApplication.vue';

export const routes = [
  { path: '/', name: 'home-page', component: HomePage },
  { path: '/login', name: 'login-page', component: Login },
  {
    path: '/mainapp',
    name: 'main-application',
    component: MainApplication,
    props: true
  }
];
