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
        clientWidth:0,
        collapsed:false
    };
  },
  components: {
      UserMenu
  },
  watch: {
      //监听宽度变化 处理collpase
     clientWidth: function (val){
         if(!this.timer){
            this.clientWidth = val
            this.timer = true
            let that = this
            setTimeout( function() {
                that.collapsed = that.clientWidth < 971 ? true : false ;
                that.$emit('sendCollapased', that.collapsed)
                that.timer = false    
            },400)
         }
     }

  },
  methods: {
      toggleCollapsed() {
          this.collapsed = !this.collapsed;
          this.$emit('sendCollapased', this.collapsed)
      },
  },
  mounted() {
        const that = this;
        //监听页面宽度的变化 处理collpase
        window.onresize = () => {
            return (() => {
                that.clientWidth = window.innerWidth
            })()
        }
  }
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
