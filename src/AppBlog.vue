<template>
<div id="app" class="app-container">
    <Navbar />

    <router-view></router-view>

    <Footer />
    <Sidebar />
</div>
</template>

<script>
import Navbar from './components/nav.vue';
import Footer from './components/footer.vue';
import Sidebar from './components/sidebar.vue';

export default {
    components: {
        Navbar,
        Footer,
        Sidebar
    }
}
</script>

<style lang="less">
.app-container{
    overflow-x: hidden;
    z-index: 0;
    height: 100%;
    background-color: #fff;
}
</style>