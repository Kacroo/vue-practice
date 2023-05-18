import Vue from 'vue'

export const store = Vue.observable({
    count: 0
})

export const mutations = {
    addCount(){
        store.count++
    },
    decCount(){
        store.count--
    }
}