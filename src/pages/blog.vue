<template>
    <div id="app" class="app-content">
        <div class="app-wrapper" v-bind:class="{ show: menuOpened }" v-on:click="closeMenu">
            <section class="intro">
                <Navbar />
                <div class="intro-img"></div>
                <div class="meta">
                    <h1 class="title">Yufan's Blog.</h1>
                    <p class="subtitle">Stay simple, stay naive</p>
                </div>
            </section>
        </div>
        <Sidebar />
    </div>
</template>

<script>
import Navbar from '../components/nav.vue';
import Sidebar from '../components/sidebar.vue';

export default {
    computed: {
        menuOpened() {
            return this.$store.state.menuOpened;
        }
    },
    methods: {
        closeMenu() {
            if (this.$store.state.menuOpened) {
                this.$store.commit('toggleMenu');
            }
        }
    },
    components: {
        Navbar,
        Sidebar
    }
}
</script>

<style lang="less">
.app-content{
    overflow-x: hidden;

    .app-wrapper{
        transition: all 0.3s ease-out .0s;
        transform: translate3d(0, 0, 0);

        .intro{
            position: relative;
            height: 50%;
            height: 50vh;
            box-shadow: -0.1rem 0 0.5rem 0 rgba(0, 0, 0, 0.5);

            .intro-img{
                position: absolute;
                z-index: -1;
                height: calc(100%);
                width: 100%;
                background-image: url(../assets/img/intro-desktop.jpg);
                background-size: cover;
                background-position: center center;
                filter: brightness(0.5);
                -webkit-filter: brightness(0.5);
                -moz-filter: brightness(0.5);
            }
            .meta{
                color: #fff;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .title{
                    font-size: 4rem;
                }
                .subtitle{
                    font-size: 2rem;
                }
            }
        }
    }
    .app-wrapper.show{
        transform: translate3d(100px, 0, 0);
    }
}
</style>