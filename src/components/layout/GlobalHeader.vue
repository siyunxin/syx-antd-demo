<template>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="header-container">
            <div>
                <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
                    <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'"/>
                </a-button>
            </div>
            <div class="user-menu">
                <user-menu></user-menu>
            </div>
        </div>
    </a-layout-header>
</template>

<script>
import UserMenu from '@/components/tools/UserMenu'
export default {
  data() {
    return {
        collapsed:false
    };
  },
  components: {
      UserMenu
  },
  methods: {
      toggleCollapsed() {
         
          this.collapsed = !this.collapsed;
           console.log(this.collapsed)
          this.$emit('sendCollapased', this.collapsed)
      }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.ant-layout-header {
  padding: 0 !important;
}
.header-container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .user-menu{
        position: fixed;
        z-index: 1;
        right:18px;
    }
}
</style>
