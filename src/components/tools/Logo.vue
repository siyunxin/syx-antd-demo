<template>
    <div class="logo">
        <div class="log-box">

        </div>
        <div class="log-title">
            <h1>Syx Antd Demo</h1>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style  lang="less" scoped>
    .logo{
        width: 100%;
        height: 64px;
        min-height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        .log-box{
            width: 34px;
            height: 30px;
            background: url(../../assets/logo.png) no-repeat;
            background-size: 100% 100%;
        }
        .log-title{
            padding: 0 0 0 8px;
        }
        h1{
            font-size: 20px;
            margin-bottom: 0;
            color: #fff;
        }
    }


</style>
