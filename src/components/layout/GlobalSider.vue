<template>
    <a-layout-sider  v-model="collapsed" :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
       <logo :showLogoText="!collapsed"/>
       <sider-menu></sider-menu>
    </a-layout-sider>
</template>

<script>

import Logo from '@/components/tools/Logo.vue'
import SiderMenu from '@/components/tools/SiderMenu.vue'
export default {
    props:  {
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    data (){
        return {
           
        }
    },

    components:{
        Logo,
        SiderMenu
    },

    methods : {

    },
    mounted (){

    }
}
</script>

<style >

</style>
