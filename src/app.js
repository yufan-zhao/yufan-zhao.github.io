import _ from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import store from './store';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Blog from '../src/pages/blog.vue';

let vm = new Vue({
    el: '#app',
    template: '<Blog />',
    store,
    components: { Blog }
});