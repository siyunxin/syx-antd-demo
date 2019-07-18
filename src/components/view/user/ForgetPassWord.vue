<template>
  <div class="forget-wrapper">
    <a-form :form="form" ref="forgetfrom"  @submit="forgetSubmit">
      <a-form-item>
        <!-- 触发验证 validateTrigger -->
        <a-input
          type="text"
          id="name"
          placeholder="请输入账号"
          v-decorator="[ 'name', { rules:[{ required:true,message:'请输入账号信息'}], validateTrigger: 'blur'} ]"
        >
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)'}"></a-icon>
        </a-input>
      </a-form-item>

      <a-form-item>
        <!-- 触发验证 validateTrigger -->
        <a-input
          type="password"
          id="password1"
          placeholder="请输入密码"
          v-decorator="[ 'password1', { rules:[{ required:true,message:'请输入密码'}], validateTrigger: 'blur'} ]"
        >
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)'}"></a-icon>
        </a-input>
      </a-form-item>
       <a-form-item>
        <!-- 触发验证 validateTrigger -->
        <a-input
          type="password"
          placeholder="再次输入密码"
          v-decorator="[ 'password2', { rules:[{ required:true,message:'两次密码不一致'}]}]"
        >
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)'}"></a-icon>
        </a-input>
      </a-form-item>
      <a-form-item>
          <a-button type="primary">确定</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "forget-name",
  data() {
    return {
        form: this.$form.createForm(this)
    };
  },
  methods: {
      forgetSubmit() {

      }
  },
  created() {}
};
</script>

<style lang="less" scoped>
.forget-wrapper {
  width: 368px;
  min-width: 268px;
  margin: 0 auto;
}
</style>
