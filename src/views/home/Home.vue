<template lang="">
    <div>
        <navbar class="home-navbar"><div slot="nav-center">购物车</div></navbar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommend"></recommend-view>
        <feature-view></feature-view>
    </div>
</template>
<script>
import navbar from 'components/common/navbar/NavBar.vue';
import HomeSwiper from './childcomps/HomeSwiper.vue';
import RecommendView from './childcomps/RecommendView.vue'
import FeatureView from './childcomps/FeatureView'
import {homeGetMultiData} from 'network/home.js'
export default {
    name: 'Home',
    data() {
        return {
            banners: [],
            recommend: []
        }
    },

    components: {
        navbar,
        HomeSwiper,
        RecommendView,
        FeatureView
    },
    created() {
        homeGetMultiData().then(res => {
            // console.log(res)
            this.banners = res.data.data.banner.list;
            this.recommend = res.data.data.recommend.list;
        })
    }
}
</script>
<style lang="css">
    .home-navbar {
        background-color: var(--color-tint);
        color: #fff;
    }
</style>