<template>
    <div>
        <a-breadcrumb>
            <a-breadcrumb-item v-for="(item,index) in routerArr" :key="index">
                {{item.meta.title}}
            </a-breadcrumb-item>
            <!-- <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item> -->
        </a-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return{
            routerArr: []
        }
    },
    watch:{
        '$route': function(newVal,oldVal) {
            this.routerArr = this.$route.matched
        }   
    },
    methods: {

    },
    created(){
        const { '$route': route } = this  
        this.routerArr = route.matched
    }
    
};
</script>

<style>
</style>
