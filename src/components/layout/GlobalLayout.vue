<template>
  <a-layout>
    <global-sider></global-sider>
    <a-layout :style="{ minHeight:'100vh' }">
      <a-layout-header>
        <global-header></global-header>
      </a-layout-header>
      <bread-crumb style="padding:10px"></bread-crumb>
      <a-layout-content style="padding:0 10px 10px 10px">

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
import BreadCrumb from '@/components/tools/BreadCrumb'
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
    BreadCrumb
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