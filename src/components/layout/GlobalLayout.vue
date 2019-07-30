<template>
  <a-layout>
    <global-sider :collapsed="collapsed"></global-sider>
    <a-layout :style="{ minHeight:'100vh', marginLeft: left }">
      <a-layout-header>
        <global-header @sendCollapased="receiveCollapased"></global-header>
      </a-layout-header>
      <a-layout-content style="background:#fff; padding:0 10px 10px 10px">
        <slot></slot>
      </a-layout-content>
      <a-layout-footer>
         <global-footer></global-footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import GlobalHeader from "@/components/layout/GlobalHeader";
import GlobalSider from "@/components/layout/GlobalSider";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default {
  data() {
    return {
      collapsed: false,
      left: '200px'
    };
  },
  components: {
    GlobalHeader,
    GlobalSider,
    GlobalFooter,
  },
  methods: {
    receiveCollapased(val) {
      let emitVal = val;
      this.collapsed = emitVal
      this.collapsed ? this.left = '80px' : this.left = '200px'
    }
  }
};
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-layout-header {
  padding: 0  !important;
}
</style>