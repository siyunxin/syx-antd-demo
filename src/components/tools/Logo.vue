<template>
    <div class="logo">
        <div class="log-box">

        </div>
        <div :class="['log-title',showLogoText ? 'logo-text-show' : 'logo-text-hidden']">
            <h1 class="logo-text">Syx Antd Demo</h1>
        </div>
    </div>

</template>

<script>
export default {
  props: {
    showLogoText: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      Title: "Antd Demo"
    };
  }
};
</script>

<style  lang="less" scoped>
.logo {
  height: 32px;
  margin: 16px;
  display: flex;
  align-items: center;
  .log-box {
    width: 34px;
    height: 30px;
    background: url(../../assets/logo.png) no-repeat;
    background-size: 100% 100%;
  }
  .log-title {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  h1 {
      position: absolute;
      width: 100%;
      top: 0;
      left: 8px;
      font-size: 20px;
      color: #fff;
      -webkit-transition: all 1s;
      transition: all 1s;
  }
  .logo-text-show {
    display: inline-block;

    
  }
  .logo-text-hidden {
    display: none;
  }
}
</style>
