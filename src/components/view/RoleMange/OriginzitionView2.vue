<template>
  <div class="originzition2">
    <div class="originzition-select">
        <!-- 显示搜索框 -->
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
    </div>
    <div class="originzition-table">
        <my-table></my-table>
    </div>
  </div>
</template>

<script>
import MyTable from '@/components/tools/MyTable'
export default {
  name: "originzition2",
  data() {
    return {
      treeExpandedKeys: [],
      value: undefined
    };
  },
  components:{
      MyTable
  },
  methods: {
    onChange(value) {
      console.log(value);
      this.value = value;
    }
  }
};
</script>

<style lang="less" scoped>
 .originzition-table{
     margin-top: 10px;
 }
</style>
