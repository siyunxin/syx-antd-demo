<template>
  <div class="table-wrapper">
    <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="tableData">
      <template slot="operation" slot-scope="text, record">
        <span class="operation-item" @click="handleEditRole(record.key)">
          <a href="javascript:;">查看</a>
        </span>
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
  name: "mytable",
  data() {
    return {
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
      tableData: [
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
  computed: {
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === "Disabled User", // Column configuration not to be checked
            name: record.name
          }
        })
      };
    }
  },
  methods: {}
};
</script>

<style>
</style>
