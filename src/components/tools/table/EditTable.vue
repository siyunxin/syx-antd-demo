<template>
  <div class="table-wrapper">
    <a-table
      :rowSelection="rowSelection"
      :columns="columns"
      :dataSource="dataSource"
      :pagination="pagination"
      @change="handleTableChange"
    >
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="columns.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)"
        >
          <span class="operation-item">
            <a href="javascript:;">删除</a>
          </span>
        </a-popconfirm>
        <span class="operation-item" @click="handleEditRole(record.key)">
          <a href="javascript:;">编辑</a>
        </span>
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
  name: "edit-table",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    pagination: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
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
        }),
        onSelectAll: (selected, selectedRows, changeRows) => {
          console.log("selected", selected);
          console.log("selectedRows", selectedRows);
          console.log("changeRows", changeRows);
        }
      };
    }
  },
  methods: {
    handleEditRole(key) {
      console.log(key);
    },
    handleTableChange(pagination){
      let pageInfo = { ...pagination };
      this.$emit('sendPageInfo', pageInfo)
    }
  }
};
</script>

<style>
</style>
