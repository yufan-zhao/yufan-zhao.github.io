import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import PageList from '../pages/PageList.vue';
import PageDetail from '../pages/PageDetail.vue';

const routes = [
    { path: '/', component: PageList },
    { path: '/detail', component: PageDetail }
];

export default new VueRouter({
    routes
});