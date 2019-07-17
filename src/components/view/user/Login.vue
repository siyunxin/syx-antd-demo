<template>
    <div class="login-wrapper">
        <a-form :form="form" ref="formLogin" @submit="handleSubmit">
            <a-form-item>
                <a-input
                    size="large"
                    type="text"
                    placeholder="账号"
                    v-decorator="['name',{ rules:[{ require: true, message:'请输入账号'}],validateTrigger: 'blur' } ]"
                >
                    <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)'}"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                    size="large"
                    type="password"
                    placeholder="密码"
                    v-decorator="['password',{ rules:[{ require: true, message:'请输入密码'}]}]"
                >
                    <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-row :gutter="24">
                    <a-col :md="16">
                        <a-input
                            size="large"
                            type="text"
                            placeholder="请输入验证"
                            v-decorator="['yzm',{ rules:[{reuqire: true,message:'请输入验证码'}], validateTrigger:'blur'}]"
                        >
                            <a-icon
                                slot="prefix"
                                type="mail"
                                :style="{ color: 'rgba(0,0,0,.25)' }"
                            />
                        </a-input>
                    </a-col>
                    <a-col :md="8">验证码区域</a-col>
                </a-row>
            </a-form-item>
            <a-form-item>
                <a-checkbox
                    @change="onChange"
                    v-decorator="['checkbox',{ rules:[{ require: false}]}]"
                >记住密码</a-checkbox>
                <a href="javascript:;" style="float:right">忘记密码</a>
            </a-form-item>
            <a-form-item>
                <a-button block size="large" type="primary" htmlType="submit">立即登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    onChange() {},
    handleSubmit(e) {
      e.preventDefault();
      const {
        form: { validateFields }
      } = this;
      const validateFieldsKey = ["name", "password", "yzm"];
      validateFields(validateFieldsKey, { force: true }, (err, values) => {
        if (!err) {
          console.log("loginForm", values);
        }else{
            console.log(err)
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.login-wrapper {
  width: 368px;
  min-width: 268px;
  margin: 0 auto;
}
</style>
