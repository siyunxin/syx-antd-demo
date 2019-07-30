<template>
  <div class="basic-div">
    <a-card style="margin-top: 24px" type="inner" title="用户信息">
      <div class="header-div">
        <div class="img-div">
          <img src="/static/img/headerImg.ded1080.jpg" alt srcset />
        </div>
        <div class="btn-div">
              <a-button type="primary">修改 </a-button>
            <a-button >保存</a-button>
        </div>
      </div>
      <div class="info-content-div" >
      
          <change-user-info  v-for="(item,index) in  infoList" :key="index+1"  :text="item.type" :value="item.value"></change-user-info>
      </div>
    </a-card>
  </div>
</template>

<script>
import ChangeUserInfo from "@/components/tools/ChangeUserInfo";
export default {
  name: "basic-setting",
  components:{
     ChangeUserInfo
  },
  data(){
      return{
          infoList:[
                {
              type:'姓名',
              value:'admin'
            },
                {
              type:'工号',
              value:'0008465'
            },
              {
              type:'所属部门',
              value:'信息服务部'
          },
               {
              type:'职位',
              value:'开发'
          },
              {
              type:'岗位',
              value:'web前端开发'
          },
           {
              type:'出生日期',
              value:'1999-01-09'
          },
          {
              type:'一段很长的描述',
              value:'那颗大史黛拉建档立卡建档立卡时间了大加深了对撒娇来得快数据'
          }
          
          ]
      }
  }
};
</script>

<style lang="less" scoped>
.basic-div {
  width: 100%;
  height: 900px;
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
    .btn-div{
        margin-left:35%;
        line-height: 100px;
        font-size: 18px;
    }  
  }
  
  .info-content-div{
       width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
