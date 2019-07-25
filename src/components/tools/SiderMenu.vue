<template>
  <div>
    <a-menu mode="inline" :openKeys="openKeys" :selectedKeys="selectedKeys" @openChange='openChange' @click="clickSelect">
      <template v-for=" (item, index) in menuList ">
        <template v-if=" item.submenu ">
          <a-sub-menu :key=" item.subkey ">
            <span slot="title">
              <a-icon type="appstore"/>
              <span>{{ item.menu }}</span>
            </span>
            <template v-for=" ( subitem ) in item.submenu ">
              <a-menu-item :key=" subitem.key" @click="clickMenuItem( subitem.subindex )">{{ subitem.subtitle }}</a-menu-item>
            </template>
          </a-sub-menu>
        </template>
        <template v-else>
          <a-menu-item :index="index" :key="item.key">{{ item.menu }}</a-menu-item>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      openKeys: [this.$route.meta.subKey],
      selectedKeys: [this.$route.meta.key],
      menuList: [
        {
          menu: "首页",
          subkey: "sub1",
          submenu: [
            {
              subtitle: "个人中心",
              subindex: "/mine/mineindex",
              key: "1"
            },
            {
              subtitle: "个人设置",
              subindex: "/mine/mineset",
              key: "2"
            }
          ]
        },
        {
          menu: "角色",
          subkey: "sub2",
          submenu: [
            {
              subtitle: "角色管理",
              subindex: "/user/rolemanage",
              key: "3"
            },
            {
              subtitle: "组织查看",
              subindex: "/user/originview",
              key: "4"
            },
            {
              subtitle: "组织查看2",
              subindex: "/user/originview2",
              key: "5"
            }
          ]
        },
        {
          menu: "资讯管理",
          subkey: "sub3",
          submenu: [
            {
              subtitle: "资讯发布",
              subindex: "/information/public",
              key: "6"
            },
            {
              subtitle: "资讯列表",
              subindex: "/information/check",
              key: "7"
            }
          ]
        },
        {
          menu: "echarts",
          subkey: "sub4",
          submenu: [
            {
              subtitle: "echarts",
              subindex: "/echarts/index",
              key: "7"
            },
          ]
        }
      ]
    };
  },
  
  computed:{
    ...mapGetters(['menuIndex'])
  },
  watch:{
    '$route':function(newVal,oldVal) {
      this.openKeys = [ newVal.meta.subKey ]
      this.selectedKeys = [ newVal.meta.key ]
    }
  },
  methods: {
    ...mapActions(['changeMenuSubKey','changeMenuKey']),
    
    clickMenuItem( path ) {
     
      this.$router.push( path )
    },
    //Menu点击事件
    clickSelect( {item,key } ){
      console.log("key",key)
      this.selectedKeys = [key]
      this.changeMenuKey( [key] )
    },
    openChange( openKeys ){
      console.log("打开某一组sub", openKeys )
       this.openKeys = openKeys
       this.changeMenuSubKey( openKeys )
    }

  },
  created(){
  
  },
  mounted() {
 
  },
};
</script>

<style>
</style>
