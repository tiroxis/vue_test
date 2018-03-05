<template>
    <div class="article_wrapper">
        <ul class="article-list">
            <li v-for="item in list" v-bind:class="['article-preview', 'dt-' + item.type]">
                <div class="article-preview_inner">
                    <div class="title">{{ item.title }}</div>
                    <div class="description">{{ item.description }}</div>
                    <router-link :to="{ path: '/article/' + item.id }" class="view_link"></router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'ArticleList',
        props: [],
        computed: mapGetters({
            list: 'articleList'
        }),
    };
</script>

<style lang="scss">
    @import 'utils/configuration';

    .article-list{
        display: block;
        margin:0; padding: 0;
        list-style: none;
        border:2px solid #e2e2e2;

        .article-preview{
            margin:0; padding: 0;
            list-style: none;
            position:relative;
            width:span(4);
            @include inline-block(top);
            @include box-sizing(border-box);
            border:8px solid transparent;
            padding-bottom: 25%;
            height:0;
            z-index: 1;

            &.dt-normal{
                width:span(4);
            }

            &.dt-double{
                width:span(8);
            }

            .article-preview_inner{
                overflow: hidden;
                position:absolute; left:0; top:0; z-index: 1;
                width: 100%;
                height: 100%;
                background:url('http://lorempixel.com/320/240/') 50% 50% no-repeat;
                @include background-size(cover);
                border:2px solid #e2e2e2;
                @include box-sizing(border-box);

                .title,
                .description{
                    margin:20px;
                    background:rgba(#000, .4);
                    color:#fff;
                    font-size: 24px;
                    padding:0 8px;
                    @include inline-block();
                    float:left;
                    clear: both;
                }

                .description{
                    margin-top:0;
                    font-size: 18px;
                }

                .view_link{
                    position:absolute; left:0; top:0; z-index: 2;
                    width: 100%; height: 100%;
                    background: rgba(#fff, .0);
                    display: block;
                    cursor: pointer;
                    padding:0; margin: 0;
                }
            }

            @include breakpoint((max-width:1024px)){
                padding-bottom: 30%;
                &.dt-normal{
                    width:span(6);
                }

                &.dt-double{
                    width:span(12);
                }

                .article-preview_inner{
                    .title{
                        font-size: 18px;
                        margin-bottom: 10px;
                    }

                    .description{
                        font-size: 16px;
                    }
                }
            }

            @include breakpoint((max-width:480px)){
                padding-bottom: 50%;
                &.dt-normal,
                &.dt-double{
                    width:span(12);
                }

                .article-preview_inner{
                    .title{
                        font-size: 16px;
                    }

                    .description{
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>