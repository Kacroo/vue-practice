<template>
    <div>
        <h1>Page2</h1>
        <div @click="routerJump">Click me to Page1</div>
    </div>
</template>

<script>
import API from '@/api/index'
export default {
    data(){
        return {
            
        }
    },
    created(){
        API.getData().then(res => {
            console.log(res)
        }).catch(err => {
            console.log('错误：',err)
        })
    },
    methods:{
        routerJump(){
            this.$router.push('/page1')
        }
    }
}
</script>

<style>


</style>