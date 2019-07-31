<template>
  <div class="check-wrapper">
    <a-card :bordered="true">
      <div class="table-top-title-wrapper">
        <a-form layout="inline">
          <a-row :gutter="24">
            <a-col :md="6" :sm="24">
              <a-form-item label="标题">
                <a-input placeholder="请输入"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <a-form-item label="栏目">
                <a-input placeholder="请输入"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <a-form-item label="状态">
                <a-input placeholder="请输入"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <a-form-item>
                <a-button type="primary">查询</a-button>
                <a-button style="margin-left:10px;">审核</a-button>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <div class="table-list-wrapper">
        <list-table :columns="columns" :dataSource="dataSource" :pagination="pagination"></list-table>
      </div>
    </a-card>
  </div>
</template>

<script>
import ListTable from "@/components/tools/table/ListTable";  // 展示列表形式 只可点击查看不可 无编辑按钮
export default {
  name: "checkinformation",
  data() {
    return {
      pagination:{
        current: 2,
        total: 10,
        pageSize: 5,
        showTotal: total => `共 ${total} 条数据`
      },
      columns: [
        {
          title: "序号",
          dataIndex: "key"

        },
        {
          title: "缩略图",
          dataIndex: "smallpic",
          customRender: (text,record,index)=>  <div style="width:60px;"><img src={text} style="width:100%;height:100%;" alt="缩略图"/></div> 
        },
        {
          title: "置顶头图",
          dataIndex: "tophead",
          customRender: (text,record,index)=>  <div style="width:80px;height:60px;"><img src={text} style="width:100%;height:100%;" alt="缩略图"/></div> 

        },
        {
          title: "栏目",
          dataIndex: "part"
        },
        {
          title: "类型",
          dataIndex: "newstype"
        },
        {
          title: "置顶标识",
          dataIndex: "toplogo"
        },
        {
          title: "状态",
          dataIndex: "status"
        },
      ],
      dataSource:[
        {
          key: "0",
          smallpic: require('@/assets/logo.png'),
          tophead: require('@/assets/images/headerImg.jpg'),
          part: "London, Park Lane no. 0",
          newstype: "admin",
          toplogo: "2019-07-10",
          status: "admin",
        },
        {
          key: "1",
          smallpic: require('@/assets/logo.png'),
          tophead: require('@/assets/images/headerImg.jpg'),
          part: "London, Park Lane no. 0",
          newstype: "admin",
          toplogo: "2019-07-10",
          status: "admin",
        },
        {
          key: "2",
          smallpic: require('@/assets/logo.png'),
          tophead: require('@/assets/images/headerImg.jpg'),
          part: "London, Park Lane no. 0",
          newstype: "admin",
          toplogo: "2019-07-10",
          status: "admin",
        },
        {
          key: "3",
          smallpic: require('@/assets/logo.png'),
          tophead: require('@/assets/images/headerImg.jpg'),
          part: "London, Park Lane no. 0",
          newstype: "admin",
          toplogo: "2019-07-10",
          status: "admin",
        },
        {
          key: "4",
          smallpic: require('@/assets/logo.png'),
          tophead: require('@/assets/images/headerImg.jpg'),
          part: "London, Park Lane no. 0",
          newstype: "admin",
          toplogo: "2019-07-10",
          status: "admin",
        },
        {
          key: "5",
          smallpic: require('@/assets/logo.png'),
          tophead: require('@/assets/images/headerImg.jpg'),
          part: "London, Park Lane no. 0",
          newstype: "admin",
          toplogo: "2019-07-10",
          status: "admin",
        },
        {
          key: "6",
          smallpic: require('@/assets/logo.png'),
          tophead: require('@/assets/images/headerImg.jpg'),
          part: "London, Park Lane no. 0",
          newstype: "admin",
          toplogo: "2019-07-10",
          status: "admin",
        },
        
      ]
    };
  },
  components: {
    ListTable
  }
};
</script>

<style lang="less">
  @import url('../../global.less');
</style>
