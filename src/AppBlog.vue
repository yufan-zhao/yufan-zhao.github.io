<template>
<div id="app" class="app-container">
    <Navbar />

    <router-view></router-view>

    <Sidebar />
</div>
</template>

<script>
import Navbar from './components/nav.vue';
import Sidebar from './components/sidebar.vue';

export default {
    components: {
        Navbar,
        Sidebar
    }
}
</script>

<style lang="less">
.app-container{
    overflow-x: hidden;
    position: relative;
    z-index: 0;
    height: 100%;
    background-color: #fff;
}
</style>