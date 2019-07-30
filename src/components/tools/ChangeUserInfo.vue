<template>
  <div class="user-info-div">
    <div class="info-text-div">{{text}}:</div>
    <div class="info-inp-text">
      <a-textarea 
      v-model="value"
        autosize
        class="info-texterea"
       :style="{'border':bordershow ? '' : `none`}"
      />
    </div>
  </div>
</template>
<script>
export default {
    name:'change-user-info',
    props:{
        text:{
          type: String,
          default: ''
      },
      value:{
          type: String,
          default: ''
      },
      bordershow:{
        type:Boolean,
        default:false
      }
    }
};
</script>
<style lang="less">
.user-info-div {
  display: flex;
  align-items: center;
  margin: 2%;
  width: 45%;
  word-wrap: break-word;
  .info-text-div {
    font-size: 14px;
    color: #000;
  }
  .info-inp-text {
    flex: 1;
  }
  .info-texterea {
      color: #555;
       font-size: 15px;
    resize: none;
    max-width:200px;
  }
}
</style>
