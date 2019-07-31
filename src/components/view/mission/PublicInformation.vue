<template>
  <div class="publi-wrapper">
    <a-card>
      <div class="table-top-title-wrapper">
        <a-form layout="inline">
          <a-row :gutter="24">
            <a-col :md="5" :sm="24">
              <a-form-item label="标题">
                <a-input placeholder="请输入" v-model="title"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="栏目">
                <a-select v-model="partValue" @change="changePart">
                    <a-select-option value="栏目1">栏目1</a-select-option>
                    <a-select-option value="栏目2">栏目2</a-select-option>
                    <a-select-option value="栏目3">栏目3</a-select-option>
                    <a-select-option value="栏目4">栏目4</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="状态">
                <a-select v-model="statusValue" @change="changePart">
                    <a-select-option value="已发布">已发布</a-select-option>
                    <a-select-option value="未发布">未发布</a-select-option>
                    <a-select-option value="已审核">已审核</a-select-option>
                    <a-select-option value="未审核">未审核</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="9" :sm="24">
              <a-form-item>
                <a-button type="primary" @click="handleSearch">查询</a-button>
                <a-button style="margin-left:10px;" @click="handleAdd">新增</a-button>
                <a-button style="margin-left:10px;" @click="handleCheck">审核</a-button>
                <a-button style="margin-left:10px;" @click="handlePreview">预览</a-button>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <div>
        <edit-table :columns="columns" :dataSource="dataSource" :pagination="pagination"></edit-table>
      </div>
    </a-card>
    <edit-article :editModalVisible="editModalShow" @editModalCancel=" editModalShow = false"></edit-article>
    <preview-modal :previewModalVisible="previewModalShow" @previewModalCancel=" previewModalShow = false"></preview-modal>
  </div>
</template>

<script>
import EditTable from "@/components/tools/table/EditTable";
import EditArticle from '@/components/tools/modal/EditArticleModal' //编辑文章modal
import PreviewModal from '@/components/tools/modal/PreviewModal'
export default {
  name: "publicinformation",
  data() {
    return {
      title:'',
      partValue:'栏目1',
      statusValue: '已发布',
      editModalShow: false,
      previewModalShow: false,
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
    EditTable,
    EditArticle,
    PreviewModal
  },
  methods: {
    changePart(value) {
      console.log(`Part${value}`,)
    },
    handleSearch() {
      const { title, partValue, statusValue } = this
      console.log(`查询${ title, partValue, statusValue }`)
    },
    handleCheck() {

    },
    handleAdd() {
      this.editModalShow = true
    },
    handlePreview() {
      this.previewModalShow = true
    }
  }
};
</script>

<style lang="less" scoped>
  @import url('../../global.less');
</style>
