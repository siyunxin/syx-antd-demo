<template>
  <div>
    <div class="theme-div">
      <div class="theme-header">
        <span>主題色</span>
      </div>
      <div class="theme-check">
        <div
          :key="i"
          v-for="(item, i) in colorList"
          class="color-checkbox"
          :style="{backgroundColor:item.color}"
          @click="ChangeTopic(i)"
        >
          <a-icon v-show="item.checked" type="check" style="fontSize:20px;color:#fff" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { constants } from "fs";
export default {
  name: "selfdom-setting",
  data() {
    return {
      colorList: [
        {
          color: "#CC6699",
          value: "purple",
          checked: true
        },
        {
          color: "#222a2d",
          value: "black",
          checked: false
        },
        {
          color: "#438eb9",
          value: "blue",
          checked: false
        }
      ]
    }
  },
  methods: {
      ChangeTopic(i){
               this.colorList.forEach(function(item){
                   item.checked=false;
               })
               this.colorList[i].checked=true;
               document.getElementById('app').className='theme'+this.colorList[i].value
      }
  },
  mounted() {
  }
};
</script>

<style lang="less" scoped>
.theme-div {
  width: 100%;
  .theme-header {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .theme-check {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .color-checkbox {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 5px;
    border-radius: 2px;
  }
}
</style>

