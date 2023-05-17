import router from '../router/index'
import store from '../store/index'

router.beforeResolve((to, from, next) => {
    if(window.sessionStorage.getItem('name')){
        store.commit('setName', window.sessionStorage.getItem('name'))
        window.sessionStorage.removeItem('name')
    }
    next()
})