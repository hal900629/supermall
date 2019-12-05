<template lang="">
    <div class="tabbar-item" @click="change">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
   
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        change() {
            this.$router.push(this.path)
        }
    }
}
</script>
<style lang="css">
    .tabbar-item {
        flex: 1;
        height: 49px;
        font-size: 14px;
        text-align: center;
    }
    .tabbar-item img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    
</style>