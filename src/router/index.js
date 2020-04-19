import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "../components/HomePage";
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import VModal from 'vue-js-modal';
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.use(VModal);
Vue.use(VueCarousel);


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Eraklient',
            component: HomePage
        },
        {
            path: '/era',
            name: 'Eraklient',
            component: HomePage
        },
        {
            path: '/ari',
            name: 'Ariklient',
            component: HomePage
        },
        { path: '/', redirect: '/era' }
    ]
})