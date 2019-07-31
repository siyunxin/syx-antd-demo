<template>
  <div class="originzition-wrapper">
    <a-card :bordered="true">
      <a-row :gutter="24">
        <a-col :md="4">
          <a-tree :loadData="onLoadData" :treeData="treeData" @select="selectTree" />
        </a-col>
        <a-col :md="20">
          <edit-table
            :columns="columns"
            :dataSource="dataSource"
            :pagination="pagination"
            @sendPageInfo="receivePageInfo"
          ></edit-table>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import EditTable from "@/components/tools/table/EditTable";
export default {
  data() {
    return {
      treeData: [
        { title: "Expand to load", key: "0" },
        { title: "Expand to load", key: "1" }
      ],
      pagination: {
        current: 1,
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
        }
      ]
    };
  },
  components: {
    EditTable
  },
  methods: {
    onLoadData(treeNode) {
      return new Promise(resolve => {
        if (treeNode.dataRef.children) {
          resolve();
          return;
        }
        setTimeout(() => {
          treeNode.dataRef.children = [
            { title: "Child Node", key: `${treeNode.eventKey}-0` },
            { title: "Child Node", key: `${treeNode.eventKey}-1` }
          ];
          this.treeData = [...this.treeData];
          resolve();
        }, 1000);
      });
    },
    selectTree( selectKey ) {
      console.log(selectKey);
    },
    receivePageInfo( pageinfo ) {
      console.log(pageinfo)
      let pageObj = { ...pageinfo }
      this.pagination = pageObj
    }
  }
};
</script>

<style>
</style>
