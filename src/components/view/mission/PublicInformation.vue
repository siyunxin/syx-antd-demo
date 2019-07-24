<template>
  <div class="publi-wrapper">
    <a-card>
      <div class="table-rolemanage-title-wrapper">
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
      <div>
        <edit-table></edit-table>
      </div>
    </a-card>
  </div>
</template>

<script>
import EditTable from "@/components/tools/table/EditTable";
export default {
  name: "publicinformation",
  data() {
    return {};
  },
  components: {
    EditTable
  }
};
</script>

<style lang="less" scoped>
/deep/ .table-rolemanage-title-wrapper {
  .ant-form-inline {
    .ant-form-item {
      margin-bottom: 24px;
      margin-right: 0;
      display: flex;
    }
  }
}
</style>
