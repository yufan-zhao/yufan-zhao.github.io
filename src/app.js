import _ from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap';
Vue.use(VueRouter);

let vm = new Vue({
    el: '#app',
    data: {
        title: 'Hello, Vue!'
    }
});