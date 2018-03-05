import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import App from '@/App.vue';
import store from '@/site/store'

import ArticleList from '@/site/widgets/article/list.vue';
import ArticleDetail from '@/site/widgets/article/detail.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

store.dispatch('getAllArticles');

const routes = [
    {
        path: '/', component: ArticleList,
        props: true

    },
    { path: '/article/:id', component: ArticleDetail, props: true }
];

const router = new VueRouter({ routes });

const app = new Vue({
    el: '#app',
    store,
    router,
    render(h) {
        return h(App);
    },
});
