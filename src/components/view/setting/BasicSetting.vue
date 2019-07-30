<template>
  <div class="basic-div">
    <a-card style="margin-top: 24px" type="inner" title="用户信息">
      <div class="header-div">
        <div class="img-div" @click="imgClick">
          <img :src="headImg" alt srcset />
        </div>

        <div class="btn-div">
          <a-button type="primary" @click="bordershow=true;">修改</a-button>
          <a-button @click="bordershow=false;">保存</a-button>
        </div>
      </div>
      <div class="info-content-div">
        <change-user-info
          v-for="(item,index) in  infoList"
          :key="index+1"
          :text="item.type"
          :value="item.value"
          :bordershow="bordershow"
        ></change-user-info>
      </div>
    </a-card>
    <div class="cropper-div" v-show="cropperShow">
      <a-icon type="close" class="cropper-close" @click="cropperShow=false" />
      <input
        type="file"
        ref="upload"
        id="uploads"
        :value="imgFile"
        style="display:none"
        accept="image/png, image/jpeg, image/gif, image/jpg"
        @change="uploadImg($event, 1)"
      />

      <div class="cropper-content">
        <vueCropper
          ref="cropper"
          :img="option.img"
          :outputSize="option.size"
          :outputType="option.outputType"
          :info="true"
          :full="option.full"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :original="option.original"
          :autoCrop="option.autoCrop"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :fixedBox="option.fixedBox"
        ></vueCropper>
      </div>
      <div class="cropper-btn-div">
        <a-button type="primary" class="cropper-btn" icon="plus" @click="changeScale(1)"></a-button>
        <a-button type="primary" class="cropper-btn" icon="minus" @click="changeScale(-1)"></a-button>
        <a-button type="primary" class="cropper-btn" @click="cropperShow=false">返回</a-button>
        <a-button type="primary" class="cropper-btn" @click="finish()">保存</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import ChangeUserInfo from "@/components/tools/ChangeUserInfo";
import { VueCropper } from "vue-cropper";
export default {
  name: "basic-setting",
  components: {
    ChangeUserInfo,
    VueCropper
  },
  data() {
    return {
      infoList: [
        {
          type: "姓名",
          value: "admin"
        },
        {
          type: "工号",
          value: "0008465"
        },
        {
          type: "所属部门",
          value: "信息服务部"
        },
        {
          type: "职位",
          value: "开发"
        },
        {
          type: "岗位",
          value: "web前端开发"
        },
        {
          type: "出生日期",
          value: "1999-01-09"
        },
        {
          type: "一段很长的描述",
          value: "那颗大史黛拉建档立卡建档立卡时间了大加深了对撒娇来得快数据"
        }
      ],
      bordershow:false,
      cropperShow: false,
      // 控制上传图片模块的显示
      headImg: "/static/img/headerImg.ded1080.jpg",
      //剪切图片上传
      option: {
        img: "",
        outputSize: 1, //剪切后的图片质量（0.1-1）
        full: false, //输出原图比例截图 props名full
        outputType: "png",
        canMove: true,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        autoCropWidth: 100,
        autoCropHeight: 100,
        fixedBox: true
      },
      fileName: "", //本机文件地址
      imgFile: ""
    };
  },
  methods: {
    // 点击图片时调起上传图片的file框
    imgClick() {
      this.$refs.upload.click();
    },
    // 放大缩小
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    uploadImg(e, num) {
      var _this = this;
      //上传图片
      var file = e.target.files[0];
      _this.fileName = file.name;
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = e => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        if (num === 1) {
          _this.option.img = data;
        } else if (num === 2) {
          _this.example2.img = data;
        }
      };
      // 转化为base64
      reader.readAsDataURL(file);
      // 转化为blob
      // reader.readAsArrayBuffer(file);
      this.cropperShow = true;
    },
    // 修改图片保存按钮点击事件 讲修建后的图片的base64保存到this.headImg中
    finish() {
      let _this = this;
      this.$refs.cropper.getCropData(data => {
        this.headImg = data;
        this.cropperShow = false;
      });
    }, 
  }
};
</script>

<style lang="less" scoped>
.basic-div {
  width: 100%;
  height:100%;
  .header-div {
    width: 95%;
    margin: 0 auto;
    display: flex;
    .img-div {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .img-div img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .btn-div {
      margin-left: 35%;
      line-height: 100px;
      font-size: 18px;
    }
  }

  .info-content-div {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  .cropper-div {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -250px;
    width: 500px;
    height: 500px;
    background: #eee;
    .cropper-close {
      float: right;
      margin-right: 8px;
      color: #333;
      margin-top: 8px;
      font-size: 20px;
    }
    .cropper-btn-div {
      display: flex;
      width: 300px;
      margin: 0 auto;
      margin-top: 20px;
      .cropper-btn {
        margin: 0 10px;
      }
    }
    .cropper-content {
      width: 300px;
      height: 300px;
      margin: 0 auto;
      margin-top: 100px;
    }
  }
}
</style>
