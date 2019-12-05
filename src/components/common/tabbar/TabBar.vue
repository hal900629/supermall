<template lang="">
    <div id="tabbar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'TabBar'
}
</script>
<style lang="css">
    #tabbar {
        width: 100%;
        background-color: #f2f2f2;
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 3;
        box-shadow: 0 -2px 10px rgba(0,0,0,.2);
    }
</style>