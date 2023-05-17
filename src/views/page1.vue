<template>
    <div>
        <h1>Page1</h1>
        <div @click="routerJump">Click me to Page2</div>
        <div>hello, {{ name }}</div>
        <button @click="changeName">change</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex'
export default {
    data(){
        return {
            myData: '我的数据'
        }
    },
    mounted(){
        window.addEventListener('beforeunload', () => {
            window.sessionStorage.setItem('name', this.name)
        })
    },
    computed:{
        ...mapState(['name']),
        ...mapGetters(['getName']),
    },
    methods:{
        ...mapMutations(['setName']),
        ...mapActions(['setNewName']),
        routerJump(){
            this.$router.push('/page2')
        },
        changeName(){
            this.setName('李四')
        }
    },
}
</script>

<style>


</style>