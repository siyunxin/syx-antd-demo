<template>
        <global-layout>
            <bread-crumb style="padding:10px 10px 10px 0"></bread-crumb>
            <router-view></router-view>
        </global-layout>
</template>

<script>
import GlobalLayout from '@/components/layout/GlobalLayout';
import BreadCrumb from '@/components/tools/BreadCrumb';
export default {
    data() {
        return {
            
        }
    },
    components: {
        GlobalLayout,
        BreadCrumb
    },
    created() {

    }
}
</script>

<style>

</style>
