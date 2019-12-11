<template lang="">
    <div class="recommend" >
        <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
            <a :href="item.link">
            <img :src="item.image" alt="">
             </a> 
             <div class="recommend-text">{{item.title}}</div> 
        </div>  
    </div>
</template>
<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="css">
    .recommend {
        width: 100%;
        height: 120px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 8px solid #f2f2f2;
    }
    .recommend-item a{
        display: block;
        width: 70px;
        height: 70px;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 auto;
    }
    .recommend-item a img {
        width: 100%;
        height: 100%;
        display: block;
    }
    .recommend-text {
        font-size: 14px;
        color: #333;
        text-align: center;
        line-height: 30px;
    }
</style>