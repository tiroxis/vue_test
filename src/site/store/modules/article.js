import article from '../../api/article';

const state = {
    list : []
};

const getters = {
    articleList: (state) => {
        return state.list
    }
};

const actions = {
    getAllArticles({ commit }) {
        article.get().then(articles => {
            commit('setArticles', articles);
        })
    }
};

const mutations = {
    setArticles(state, articles){
        state.list = articles;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}