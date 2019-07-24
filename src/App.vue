<template>
  <div id="app" class="themepurple">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/style/index.less';
#app {
  width: 100%;
  min-width: 800px;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style lang="less">
@import "./assets/style/theme.less";
.themepurple{
  .theme();
}
.themeblack {
   .theme(#222a2d, #bac2c8) 

}
.themeblue{
    .theme(#438eb9, #fff);
}
</style>