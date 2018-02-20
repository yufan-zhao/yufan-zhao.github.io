<template>
<div class="page-content" v-bind:class="{ show: $store.state.menuOpened }" v-on:click.stop="closeMenu">
    <section class="intro">
        <div class="intro-img"></div>
        <div class="meta">
            <h1 class="title">Yufan's Blog.</h1>
            <p class="subtitle">Stay simple, stay naive</p>
        </div>
    </section>
    <section class="container list-content">
        <div class="row">
            <div class="col-md-3 profile-container">
                <div class="profile">
                    <img class="avatar" src="../assets/img/avatar.jpg" />
                    <div class="name">Yufan</div>
                    <div class="signature">biu biu biu~</div>
                </div>
            </div>
            <div class="col">456</div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    methods: {
        closeMenu() {
            if (this.$store.state.menuOpened) {
                this.$store.commit('toggleMenu');
            }
        }
    }
}
</script>

<style lang="less">
.page-content{
    height: 100vh;
    overflow-x: hidden;
    transition: all 0.3s ease-out .0s;
    transform: translate3d(0, 0, 0);

    .intro{
        position: relative;
        height: 50vh;
        box-shadow: -0.1rem 0 0.5rem 0 rgba(0, 0, 0, 0.5);

        .intro-img{
            position: absolute;
            z-index: 100;
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
                z-index: 200;
                font-size: 4rem;
            }
            .subtitle{
                z-index: 200;
                font-size: 2rem;
            }
        }
    }
    .list-content{
        margin-top: 3rem;

        @media (max-width: 992px) {
            .profile-container{
                display: none;
            }
        }
        .profile{
            order: 0;
            vertical-align: top;
            flex-shrink: 0;
            position: relative;
            top: 2px;
            margin: 0 0 2px 0;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            padding-bottom: 0.5rem;
            width: 200px;

            .avatar{
                display: block;
                border-radius: 0.4rem;
                margin: 0 auto;
                width: 100%;
                box-shadow: 0 0 1px 1px rgba(0,0,0,0.2);
            }
            .name{
                font-size: 2rem;
                color: #333;
                text-align: center;
            }
            .signature{
                font-size: 1rem;
                color: #787878;
                text-align: center;
            }
        }
    }
}
.page-content.show{
    transform: translate3d(150px, 0, 0);
}
</style>