<template>
  <div class="user-container">
    <a-dropdown>
      <a class="ant-dropdown-link" href="#">
        <span>
          <a-avatar icon="user" />
          <span class="user-name">司云昕</span>
        </span>
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <router-link :to="{ name: 'mineindex' }">
            <a href="javascript:;" @click="userCenter">个人中心</a>
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;" @click="userSet">账户设置</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;" @click="logout">退出登录</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    userCenter() {
      this.$router.replace("/mine/mineindex");
    },
    userSet() {
      this.$router.replace("/mine/mineset");
    },
    logout() {
      sessionStorage.clear();
      this.$router.replace("/acount/login");
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.user-name {
  color: #131313;
}
</style>
