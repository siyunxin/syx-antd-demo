<template>
    <a-modal width="50%" title="文章预览" :visible="previewModalVisible" @ok="handleOk" @cancel="handleModalCancel">
        <a-card :bordered="true">
            <a-form :form="form">
                <a-form-item label="文章标题">
                    <a-input disabled defaultValue="文章一"></a-input>
                </a-form-item>
                <a-form-item label="栏目">
                    <a-select disabled defaultValue="栏目1">
                        <a-select-option value="栏目1">栏目1</a-select-option>
                        <a-select-option value="栏目2">栏目2</a-select-option>
                        <a-select-option value="栏目3">栏目3</a-select-option>
                        <a-select-option value="栏目4">栏目4</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="文章类型">
                    <a-select disabled  defaultValue="视频">
                        <a-select-option value="视频">视频</a-select-option>
                        <a-select-option value="图文">图文</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="缩略图">
                    
                </a-form-item>
                <a-form-item>
                    文本域 暂无
                </a-form-item>
            </a-form>
        </a-card>
    </a-modal>
</template>

<script>
export default {
    name: 'preview-modal',
    props:{
        previewModalVisible:{
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            form: this.$form.createForm(this)
        }
    },
    methods: {
        handleModalCancel() {
            this.$emit("previewModalCancel")
        },
        handleOk(){

        }
    },
    created() {

    },
    mounted() {

    } 
}

</script>

<style>

</style>
