<template>
    <div class="edit-article-wrapper">
        <a-modal width="70%" title="文章编辑" @ok="handleOk" @cancel="handleModelCancel" v-model="visible">
            <a-form :form="form">
                <a-form-item label="主标题">
                    <a-input placeholder="请输入主标题"></a-input>
                </a-form-item>
                <a-form-item label="副标题">
                    <a-input placeholder="请输入副标题"></a-input>
                </a-form-item>
                <a-form-item label="新闻类型">
                    <a-select defaultValue="新闻">
                        <a-select-option key="" value="新闻">新闻</a-select-option>
                        <a-select-option key="" value="新闻">视频</a-select-option>
                    </a-select>
                </a-form-item>

                <!-- <a-form-item>
                    <a-upload action="" @change="handleChangeImg" @preview="handlePreview" :fileList="fileList">
                        <div v-if="fileList.length < 3">
                            <a-icon type="plus" />
                            <div class="ant-upload-text">Upload</div>
                        </div>
                    </a-upload>
                    <a-modal :visible="previewVisible" :footer="null" @cancel="handleUploadCancel">
                        <img alt="example" style="width: 100%" :src="previewImage" />
                    </a-modal>
                </a-form-item> -->
                <div>
                     <ueditor :defaultMsg=defaultMsg :config=config ref="ue"></ueditor>
                </div>
            </a-form>
        </a-modal>
    </div>
</template>

<script>
import Ueditor from '@/components/tools/Ueditor'
export default {
    name: 'edit-article-modal',
    data() {
        return {
            form: this.$form.createForm(this),
            visible: true,
            fileList: [],
            previewVisible: false,
            previewImage: '',
            defaultMsg: '说点什么吧',
            config: {
                initialFrameWidth: null,
                initialFrameHeight: 200,
                UEDITOR_HOME_URL: '/static/UE/'
            }
        }
    },
    components:{
        Ueditor
    },
    methods: {
        //点击确定
        handleOk() {

        },
        //点击预览
        handlePreview() {

        },
        //点击切换
        handleChangeImg() {

        },
        //上传取消
        handleUploadCancel(){

        },
        //对话框取消
        handleModelCancel(){

        },
        getUEContent() {
            let content = this.$refs.ue.getUEContent();
            console.log(content)
        }
    }
}
</script>

<style lang="less">
   
    .ant-form-item{
        margin-bottom: 10px; 
    }
    

</style>
