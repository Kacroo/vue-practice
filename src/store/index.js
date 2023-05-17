import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: '张三'
    },
    getters: {
        getName(state){
            return state.name
        }
    },
    mutations: {
        setName(state, name){
            state.name = name
        }
    },
    
    actions: {
        setNewName({ commit }){
            return new Promise(resolve => {
                setTimeout(() => {
                    commit('setName', '王五')
                    resolve()
                }, 2000);
            })
        }
    }
})

export default store