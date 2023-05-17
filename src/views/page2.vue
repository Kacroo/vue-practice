<template>
    <div>
        <h1>Page2</h1>
        <div @click="routerJump">Click me to Page1</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
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