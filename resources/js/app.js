
import Vue from 'vue';

import router from './router.config'
import apolloProvider from './apollo.config'
import './bootstrap';

import Board from './Board';

window.Vue = Vue;

Vue.component('Board', Board);

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
