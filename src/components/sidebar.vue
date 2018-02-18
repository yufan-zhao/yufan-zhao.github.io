<template>
    <section class="sidebar">

    </section>
</template>

<script>
export default {
    created () {
        console.log(this.$store.state.menuOpend);
    }
}
</script>

<style lang="less">
.sidebar{
    width: 300px;
    height: 100%;
    background-color: red;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 200;
    overflow-x: hidden;
    transform: translate3d(-300px, 0, 0);
    transition: all 0.3s ease-out .0s;
}
.sidebar.show{
    transform: translate3d(0, 0, 0);
}
</style>