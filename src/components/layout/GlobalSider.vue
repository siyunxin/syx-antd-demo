<template>
    <a-layout-sider>
       <logo />
       <sider-menu></sider-menu>
    </a-layout-sider>
</template>

<script>

import Logo from '@/components/tools/Logo.vue'
import SiderMenu from '@/components/tools/SiderMenu.vue'
export default {
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
