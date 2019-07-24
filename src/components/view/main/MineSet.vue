<template>
    <div class="user-set-wrapper">
        <a-row :gutter="24">
            <a-col :md="24" :lg="6">
                <a-menu>
                    <a-menu-item :key="1">
                        基本设置
                    </a-menu-item>
                    <a-menu-item :key="2">
                        安全设置
                        </a-menu-item>
                    <a-menu-item :key="3">
                        个性设置
                        </a-menu-item>
                    <a-menu-item :key="4">
                        重要提醒
                        </a-menu-item>
                </a-menu>
            </a-col>
            <a-col :md="24" :lg="18">
                <selfdom-setting>
                </selfdom-setting>
            </a-col>
        </a-row>
    </div>
</template>
   
<script>
 import SelfdomSetting from '@/components/view/setting/SelfdomSetting';
export default {
    name:'mine-set',
    components:{
        SelfdomSetting,
    }
}
</script>

<style>

</style>
