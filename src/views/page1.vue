<template>
    <div class="container">
        <h1>Page1</h1>
        <div @click="routerJump">Click me to Page2</div>
        <button @click="clickEvent">Click me</button>
        <Function-comp v-if="myData" :text="myData" :count="count"/>
    </div>
</template>

<script>
import FunctionComp from '@/components/functionComp'
export default {
    components: {
        FunctionComp
    },
    data(){
        return {
            myData: '',
            count: 0
        }
    },
    created(){
        this.init()
    },
    mounted(){
        // 监听页面刷新事件
        // window.addEventListener('beforeunload', () => {
        //     window.sessionStorage.setItem('name', this.name)
        // })
        // hook监听生命周期钩子函数
        // this.$on('hook:beforeUpdate',() => {
        //     console.log('更新了')
        // })
    },
    methods:{
        init(){
            // 随时监听，随时取消
            // const myWatch = this.$watch('count', (nv) => {if(nv===0){console.log('监听到了')}})
            // this.$once('hook:beforeDestroy', () => {
            //     console.log('取消监听')
            //     myWatch()
            // })
        },
        routerJump(){
            this.$router.push('/page2')
        },
        clickEvent() {
            this.myData += '~'
        },
    },
}
</script>

<style lang="less">
.container {
    color: @primaryColor;
}

</style>