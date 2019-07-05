<template>
  <a-layout>
    <global-sider></global-sider>
    <a-layout :style="{ minHeight:'100vh' }">
      <a-layout-header>
        <global-header></global-header>
      </a-layout-header>
      <a-layout-content style="padding:0 10px 10px 10px">
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
      collapsed: false
    };
  },
  components: {
    GlobalHeader,
    GlobalSider,
    GlobalFooter,
  }
};
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>