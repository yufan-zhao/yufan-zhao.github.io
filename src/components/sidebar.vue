<template>
    <section class="sidebar" v-bind:class="{ show: menuOpened }">

    </section>
</template>

<script>
export default {
    computed: {
        menuOpened() {
            return this.$store.state.menuOpened;
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
}
.sidebar.show{
    transform: translate3d(0, 0, 0);
}
</style>