<template lang="">
    <div>
       <tabbar>
      <tabbaritem path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart">
        <img slot="item-icon" src="@/assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar> 
    </div>
</template>
<script>
import tabbar from 'components/common/tabbar/TabBar';
import tabbaritem from 'components/common/tabbar/TabBarItem';
export default {
    name: 'MainTabBar',
    components: {
        tabbar,
        tabbaritem
    }
}
</script>
<style lang="">
    
</style>