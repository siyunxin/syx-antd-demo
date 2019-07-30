<template>
  <div class="user-info-div">
    <div class="info-text-div">{{text}}:</div>
    <div class="info-inp-text">
      <a-textarea
      v-model="value"
        autosize
        style="border:none;resize : none"
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
    border: none;
    resize: none;
    max-width:200px;
  }
}
</style>
