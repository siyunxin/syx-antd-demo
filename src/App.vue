<template>
  <div id="app" class="themeblue">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >


</style>
<style lang="less">
@import './assets/style/index.less';
@import "./assets/style/theme.less";
@import './components/global.less';
#app {
  width: 100%;
  min-width: 800px;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: hidden
}
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
