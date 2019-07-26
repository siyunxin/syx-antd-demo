<template>
  <div class="publi-wrapper">
    <a-card>
      <div class="table-top-title-wrapper">
        <a-form layout="inline">
          <a-row :gutter="24">
            <a-col :md="6" :sm="24">
              <a-form-item label="标题">
                <a-input placeholder="请输入" v-model="title"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <a-form-item label="栏目">
                <a-select v-model="partValue" @change="changePart">
                    <a-select-option value="栏目1">栏目1</a-select-option>
                    <a-select-option value="栏目2">栏目2</a-select-option>
                    <a-select-option value="栏目3">栏目3</a-select-option>
                    <a-select-option value="栏目4">栏目4</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <a-form-item label="状态">
                <a-select v-model="statusValue" @change="changePart">
                    <a-select-option value="已发布">已发布</a-select-option>
                    <a-select-option value="未发布">未发布</a-select-option>
                    <a-select-option value="已审核">已审核</a-select-option>
                    <a-select-option value="未审核">未审核</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <a-form-item>
                <a-button type="primary" @click="handleSearch">查询</a-button>
                <a-button style="margin-left:10px;" @click="handleCheck">审核</a-button>
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
    return {
      title:'',
      partValue:'栏目1',
      statusValue: '已发布'
    };
  },
  components: {
    EditTable
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

    }
  }
};
</script>

<style lang="less" scoped>
  @import url('../../global.less');
</style>
