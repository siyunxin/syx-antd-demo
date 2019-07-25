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
        <list-table></list-table>
      </div>
    </a-card>
  </div>
</template>

<script>
import ListTable from "@/components/tools/table/ListTable";
export default {
  name: "checkinformation",
  data() {
    return {};
  },
  components: {
    ListTable
  }
};
</script>

<style lang="less">
  @import url('../../global.less');
</style>
