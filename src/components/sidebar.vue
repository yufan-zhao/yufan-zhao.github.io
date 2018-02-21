<template>
    <section class="sidebar" v-bind:class="{ show: menuOpened }">
        <div class="sidebar-nav">
            <div class="navbar-menu" v-on:click="toggleMenu">
                <span class="menu-icon"></span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        menuOpened() {
            return this.$store.state.menuOpened;
        }
    },
    methods: {
        toggleMenu() {
            if (this.$store.state.menuOpened) {
                this.$store.commit('toggleMenu');
            }
        }
    },
    created () {
        console.log('init sidebar: ' + this.$store.state.menuOpened);
    }
}
</script>

<style lang="less">
.sidebar{
    width: 20rem;
    height: 100%;
    background-color: #222;
    box-shadow: 0px 0px 5px #222;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2000;
    overflow-x: hidden;
    transform: translate3d(-20rem, 0, 0);
    transition: all 0.3s ease-out .0s;

    .sidebar-nav{
        padding: .75rem 1rem;
        height: 56rem/16rem;

        .navbar-menu{
            float: right;
            width: 2rem;
            height: 2rem;
            border: 1px solid #fff;
            border-radius: 5px;
            cursor: pointer;
            transform: translate3d(-16rem, 0, 0);
            transition: all 0.3s ease-out 0s;

            .menu-icon{
                color: #fff;
            }
        }
        .navbar-menu:hover{
            background-color: #fff;
        }
    }
}
.sidebar.show{
    transform: translate3d(0, 0, 0);

    .sidebar-nav{
        .navbar-menu{
            transform: translate3d(0, 0, 0);
        }
    }
}
</style>