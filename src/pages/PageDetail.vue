<template>
<div class="page-content" v-bind:class="{ show: $store.state.menuOpened }" v-on:click.stop="closeMenu">
    <section class="intro">
        <div class="intro-img"></div>
        <div class="meta">
            <h1 class="title">Yufan's Blog.</h1>
            <p class="subtitle">Stay simple, stay naive</p>
        </div>
    </section>
    <section class="container detail-content" v-html="content">
    
    </section>
</div>
</template>

<script>
import essay from '../data/helloworld.md';
const axios = require('axios');
const markdown = require( "markdown" ).markdown;

export default {
    data: function() {
        return {
            content: ''
        }
    },
    mounted: function() {
        var _this = this;
        console.log(essay);
        var file = axios.get(essay)
            .then(function(res) {
                console.log(res);
                _this.content = markdown.toHTML( res.data );
            });
    },
    methods: {
        closeMenu() {
            if (this.$store.state.menuOpened) {
                this.$store.commit('toggleMenu');
            }
        }
    }
}
</script>