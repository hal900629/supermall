<template lang="">
    <div>
        <navbar class="home-navbar"><div slot="nav-center">购物车</div></navbar>
    </div>
</template>
<script>
import navbar from 'components/common/navbar/NavBar.vue'
export default {
    name: 'Home',
    components: {
        navbar
    }
}
</script>
<style lang="css">
    .home-navbar {
        background-color: var(--color-tint);
        color: #fff;
    }
</style>