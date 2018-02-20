import Vue from 'vue';
import store from './store';
import router from './router';
import Blog from './AppBlog.vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let blogVm = new Vue({
    el: '#app',
    store,
    router,
    template: '<Blog />',
    components: { Blog }
});