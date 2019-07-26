<template>
  <global-layout>
    <bread-crumb style="padding:10px 10px 10px 0"></bread-crumb>
    <router-view ></router-view>
  </global-layout>
</template>

<script>
import GlobalLayout from "@/components/layout/GlobalLayout";
import BreadCrumb from "@/components/tools/BreadCrumb";
export default {
  data() {
    return {
        transitionName: 'fade-enter'
    };
  },
  components: {
    GlobalLayout,
    BreadCrumb
  },
  created() {},
 /*  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split("/").length;
    const fromDepth = from.path.split("/").length;
    if(toDepth<fromDepth){
        console.log('?')
    }
    this.transitionName = toDepth < fromDepth ? "fade-leave" : "fade-enter";
    next();
  } */
};
</script>

<style>

</style>
