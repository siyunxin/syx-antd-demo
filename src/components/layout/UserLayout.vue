<template>
    <div class="userlayout">
        <div class="user-container">
            <div class="top">
                <div class="header">
                    <h1>BMS后台管理系统</h1>
                </div>
            </div>
            <router-view>

            </router-view>
            <div class="fotter">
               
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.userlayout {
  width: 100%;
  height: 100%;
  background: url(../../assets/images/login_bg.png);
  background-size: 100% 100%;
  .user-container {
      width: 100%;
      height: 100%;
      padding: 80px 0;
      .top {
          text-align: center;
      }
  }
}
</style>
