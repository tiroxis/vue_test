<template>

    <div class="article_wrapper" v-if="article">
        <div class="article_view">
            <router-link :to="{ path: '/' }" class="view_link">Назад</router-link>
            <h1>{{ article.title }}</h1>
            <div class="description">
                {{ article.text }}
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        name: 'ArticleDetail',
        props: {
            id: {
                type: String,
                required: true
            }
        },
        computed: {
            ...mapState({
               articles: 'article'
            }),
            article(){
                const article = this.articles.list.filter(article => article.id === parseInt(this.id));
                return article.length > 0 ? article[0] : null
            }
        }
    };
</script>

<style lang="scss">
    @import 'utils/configuration';

    .article_view{
        border:2px solid #e2e2e2;
        padding:8px 16px;
        a{
            margin-top: 8px;
            border:1px solid #e2e2e2;
            float: right;
        }
    }
</style>