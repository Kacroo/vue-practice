import Vue from 'vue'
import VueRouter from "vue-router";

import Page1 from '../views/page1.vue'
import Page2 from '../views/page2.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path: '/',
            redirect: '/page1'
        },
        {
            path: '/page1',
            name: 'page1',
            component: Page1
        },
        {
            path: '/page2',
            name: 'page2',
            component: Page2
        },
    ]
})
export default router