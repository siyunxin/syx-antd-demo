<template>
  <a-modal
    title="角色编辑"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    :confirmLoading="confirmLoading"
  >
    <div class="rolemanage-editform-wrapper">
      
        <a-form-item label="角色名称">
          <a-input placeholder="请输入角色名称" v-model="role.roleName"></a-input>
        </a-form-item>
        <a-form-item label="角色代码(英文)">
          <a-input placeholder="请输入角色代码" v-model="role.roleCode"></a-input>
        </a-form-item>
        <a-form-item label="备注">
          <a-textarea placeholder="请输入备注" v-model="role.roleRemark"></a-textarea>
        </a-form-item>
 
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
      default: {}
    }
  },
  data() {
    return {
      hello:'siyunxin',
      role: {
        key : '',
        roleName: "",
        roleCode: "",
        roleRemark: ""
      },
      confirmLoading: false,
      form: this.$form.createForm(this)
    };
  },
  watch: {
    itemData : function(nVal,oVal){
      let newValue = nVal
      const { role } = this
      role.key = newValue.key
      role.roleName = newValue.name
      role.roleCode = newValue.namecode
      role.roleRemark = newValue.remark
    }
  },
  methods: {
    handleOk() {
      this.confirmLoading = true;
      const { role } = this;
      setTimeout(() => {
        this.confirmLoading = false;
        let sendObj = {
          hiddenModal : false,
          role : role
        }
        this.$emit("sendRole", sendObj);
      }, 2000);
    },
    handleCancel() {
      this.$emit("hiddenModal", false);
    }
  },
  created() {
    
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
/deep/ .ant-modal-body {
  padding: 10px 24px !important;
}

/deep/ .ant-form-item {
  margin-bottom: 0px;
}
</style>

<style lang="less">
.ant-modal-body {
  padding: 10px 24px;
}
</style>
