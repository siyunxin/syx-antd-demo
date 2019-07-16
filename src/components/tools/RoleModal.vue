<template>
    <a-modal
        title="角色编辑"
        :visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
        :confirmLoading="confirmLoading"
    >
        <div class="rolemanage-editform-wrapper">
            <a-form>
                <a-form-item label="角色名称">
                    <a-input placeholder="请输入角色名称" :value="itemData.name"></a-input>
                </a-form-item>
                <a-form-item label="角色代码(英文)">
                    <a-input placeholder="请输入角色代码" :value="itemData.namecode"></a-input>
                </a-form-item>
                <a-form-item label="备注">
                    <a-textarea placeholder="请输入备注" :value="itemData.remark"></a-textarea>
                </a-form-item>
            </a-form>
        </div>
    </a-modal>
</template>

<script>
export default {
  name: "role-modal",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    itemData: {
      type: Object,
      default:{},
    }
  },
  data() {
    return {
      ModalText: "Content of the modal",
      confirmLoading: false
    };
  },
  methods: {
    handleOk() {
      this.ModalText = "HelloWorld SYX ";
      this.confirmLoading = true;
      setTimeout(() => {
        this.confirmLoading = false;
        this.$emit("hiddenModal", false);
      }, 2000);
    },
    handleCancel() {
      this.$emit("hiddenModal", false);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style>
</style>
