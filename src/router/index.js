import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const PageList = () => import('../pages/PageList.vue');
const PageDetail = () => import('../pages/PageDetail.vue');

const routes = [
    { path: '/', component: PageList },
    { path: '/detail', component: PageDetail }
];

export default new VueRouter({
    routes
});