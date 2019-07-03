<template>
  <div>
    <a-menu mode="inline">
      <a-menu-item> <a-icon type="mail"/>角色分配</a-menu-item>
      <a-sub-menu>
        <span slot="title"><a-icon type="appstore" /><span>文章管理</span></span>
        <a-menu-item>
          文章发布
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item>
        <a-icon type="mail"/>权限管理
      </a-menu-item>
      <a-menu-item>
        <a-icon type="mail"/>管理员
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
  mounted() {}
};
</script>

<style>
</style>
