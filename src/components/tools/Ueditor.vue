<template>
    <script id="editor" type="text/plain"></script>
</template>

<script>
import '../../../static/UE/ueditor.config.js'
import '../../../static/UE/ueditor.all.min.js'

import '../../../static/UE/ueditor.parse.min.js'
import '../../../static/UE/lang/zh-cn/zh-cn.js'
export default {
    name: 'Ueditor',
    props: {
      defaultMsg: {
        type: String
      },
      config: {
        type: Object
      }
    },
 
    data() {
        return {
           editor: null 
        }
    },
    methods: {
        getUEContent() { // 获取内容方法
            return this.editor.getContent()
        }
    },
    created() {

    },
    mounted() {
        const _this = this;
        this.editor = UE.getEditor('editor', this.config); // 初始化UE
        this.editor.addListener("ready", function () {
            _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
        });
    },
    destroyed() {
      this.editor.destroy();
    }
}
</script>

<style>

</style>
