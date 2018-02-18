<template>
    <nav class="navbar fixed-top justify-content-between customered-navbar">
        <div class="navbar-menu">
            <span class="menu-icon"></span>
        </div>
        <a class="navbar-brand" href="#">Yufan's Blog</a>
    </nav>
</template>

<script>

</script>

<style lang="less">
.customered-navbar{
    .navbar-menu{
        width: 2rem;
        height: 2rem;
        border: 1px solid #fff;
        border-radius: 5px;
        cursor: pointer;

        .menu-icon{
            color: #fff;
        }
    }
    .navbar-menu:hover{
        background-color: #fff;
    }
    .navbar-brand{
        color: #fff;
    }
}
</style>