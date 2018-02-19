import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menuOpened: false
    },
    mutations: {
        toggleMenu() {
            this.state.menuOpened = !this.state.menuOpened;
            console.log('emit toggleMenu: ' + this.state.menuOpened);
        }
    }
});