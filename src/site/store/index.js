import Vue from 'vue';
import Vuex from 'vuex'
import article from './modules/article'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        article
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})