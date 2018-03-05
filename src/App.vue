<template>
    <div class="app-layout">
        <nav class="mainmenu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Whatever</a></li>
            </ul>
        </nav>

        <router-view></router-view>

    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    @import "utils/configuration";

    .mainmenu{
        border:2px solid #e2e2e2;
        ul{
            display: block;
            list-style: none;
            margin:0; padding:0;
            li{
                @include inline-block(middle);
                list-style: none;
                margin:0; padding:0;


            }
        }
    }

    a{
        @include inline-block();
        cursor: pointer;
        padding:8px 16px;
        margin-right:20px;
        text-decoration: none;
        outline: none;
        color:#369;

        &:hover{
            text-decoration: underline;
            background:#e2e2e2;
        }
    }

    .article_wrapper{
        margin-top:8px;
    }
</style>