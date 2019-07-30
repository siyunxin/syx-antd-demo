<template>
  <div class="user-set-wrapper">
    <a-row :gutter="24">
      <a-col :md="24" :lg="6">
        <a-menu>
          <a-menu-item
            v-for="(item,index) in menuList"
            :key="index+1"
            @click="titleClick(item.name)"
          >{{item.titleText}}</a-menu-item>
        </a-menu>
      </a-col>
      <a-col :md="24" :lg="18">
        <basic-setting v-show="activeName=='BasicSetting'"></basic-setting>
        <safe-setting v-show="activeName=='SafeSetting'"></safe-setting>
        <selfdom-setting v-show="activeName=='SelfdomSetting'"></selfdom-setting>
        <important-notice v-show="activeName=='ImportantNotice'"></important-notice>
      </a-col>
    </a-row>
  </div>
</template>   
<script>
import BasicSetting from "@/components/view/setting/BasicSetting";
import SafeSetting from "@/components/view/setting/SafeSetting";
import SelfdomSetting from "@/components/view/setting/SelfdomSetting";
import ImportantNotice from "@/components/view/setting/ImportantNotice";
export default {
  name: "mine-set",
  components: {
    BasicSetting,
    SafeSetting,
    SelfdomSetting,
    ImportantNotice
  },
  data() {
    return {
      menuList: [
        {
          titleText: "基本设置",
          name: "BasicSetting"
        },
        {
          titleText: "安全设置",
          name: "SafeSetting"
        },
        {
          titleText: "个性设置",
          name: "SelfdomSetting"
        },
        {
          titleText: "重要提醒",
          name: "ImportantNotice"
        }
      ],
      // 当前被选中的组件的名称
      activeName: "BasicSetting"
    };
  },
  methods: {
    titleClick(name) {
      // 当我点击菜单时，更改当前选中的菜单的名字 以通过v-show表达式达到显示菜单组件的目的
      this.activeName = name;
    }
  }
};
</script>

<style>
</style>
