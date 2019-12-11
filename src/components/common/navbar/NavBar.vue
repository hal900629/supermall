<template lang="">
    <div class="navbar-wrap">
        <div class="navbar">
        <div class="navbar-left"><slot name="nav-left"></slot></div>
        <div class="navbar-center"><slot name="nav-center"></slot></div>
        <div class="navbar-right"><slot name="nav-right"></slot></div>
    </div>
    </div>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
<style lang="css">
.navbar-wrap {
    width: 100%;
    height: 44px;
}
.navbar {
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  background-color: #ff8198;
}
.navbar-left,
.navbar-right {
  width: 60px;
}
.navbar-center {
  flex: 1;
}
</style>