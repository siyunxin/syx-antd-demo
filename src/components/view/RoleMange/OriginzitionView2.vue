<template>
  <div class="originzition2">
    <div class="originzition-select">
      <!-- 显示搜索框 -->
      <a-row :gutter="24">
        <a-col :lg="7" :md="8" :sm="24">
          <a-tree-select
            showSearch
            style="width: 300px"
            :value="value"
            :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="请选择组织"
            allowClear
            treeDefaultExpandAll
            @change="onChange"
          >
            <a-tree-select-node value="parent 1" title="parent 1" key="0-1">
              <a-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1">
                <a-tree-select-node :selectable="false" value="leaf1" title="my leaf" key="random" />
                <a-tree-select-node value="leaf2" title="your leaf" key="random1" />
              </a-tree-select-node>
              <a-tree-select-node value="parent 1-1" title="parent 1-1" key="random2">
                <a-tree-select-node value="sss" key="random3">
                  <b style="color: #08c" slot="title">sss</b>
                </a-tree-select-node>
              </a-tree-select-node>
            </a-tree-select-node>
          </a-tree-select>
        </a-col>
        <a-col :lg="17" :md="16" :sm="24" >
            <a-button type="primary"> 新增 </a-button>
            <a-button style="background: green">修改</a-button>
            <a-button type="default">删除</a-button>
            <a-button type="danger">禁用</a-button>
            <a-button style="background: yellow">恢复</a-button>
        </a-col>
      </a-row>
    </div>
    <div class="originzition-table">
      <list-table :columns="columns" :dataSource="dataSource" :pagination="pagination" @sendPageInfo="receivePageInfo"></list-table>
    </div>
  </div>
</template>

<script>
import ListTable from "@/components/tools/table/ListTable"; //编辑类文本 事件未添加
export default {
  name: "originzition2",
  data() {
    return {
      treeExpandedKeys: [],
      value: undefined,
      pagination:{
        current: 2,
        total: 15,
        pageSize: 5,
        showTotal: total => `共 ${total} 条数据`
      },
      columns: [
        {
          title: "序号",
          dataIndex: "key"
        },
        {
          title: "姓名",
          dataIndex: "name",
          scopedSlots: { customRender: "name" }
        },
        {
          title: "角色代码",
          dataIndex: "namecode"
        },
        {
          title: "备注",
          dataIndex: "remark"
        },
        {
          title: "创建人",
          dataIndex: "creater"
        },
        {
          title: "创建时间",
          dataIndex: "createtime"
        },
        {
          title: "修改人",
          dataIndex: "modifier"
        },
        {
          title: "修改时间",
          dataIndex: "modifitime"
        },
        {
          title: "操作",
          dataIndex: "operation",
          scopedSlots: { customRender: "operation" }
        }
      ],
      dataSource: [
        {
          key: "0",
          name: "Edward King 0",
          namecode: "32",
          remark: "London, Park Lane no. 0",
          creater: "admin",
          createtime: "2019-07-10",
          modifier: "admin",
          modifitime: "2019-07-19"
        },
        {
          key: "1",
          name: "Edward King 0",
          namecode: "32",
          remark: "London, Park Lane no. 0",
          creater: "admin",
          createtime: "2019-07-10",
          modifier: "admin",
          modifitime: "2019-07-19"
        },
        {
          key: "2",
          name: "Edward King 0",
          namecode: "32",
          remark: "London, Park Lane no. 0",
          creater: "admin",
          createtime: "2019-07-10",
          modifier: "admin",
          modifitime: "2019-07-19"
        },
        {
          key: "3",
          name: "Edward King 0",
          namecode: "32",
          remark: "London, Park Lane no. 0",
          creater: "admin",
          createtime: "2019-07-10",
          modifier: "admin",
          modifitime: "2019-07-19"
        }
      ]
    };
  },
  components: {
    ListTable
  },
  methods: {
    onChange(value) {
      console.log(value);
      this.value = value;
    },
    receivePageInfo( pageinfo ) {
      console.log(pageinfo)
      let pageObj = { ...pageinfo }
      this.pagination = pageObj
    }
  }
};
</script>

<style lang="less" scoped>
.originzition-table {
  margin-top: 10px;
}
</style>
