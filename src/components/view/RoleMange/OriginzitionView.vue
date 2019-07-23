<template>
  <div class="originzition-wrapper">
    <a-row :gutter="24">
      <a-col :md="4">
        <a-tree :loadData="onLoadData" :treeData="treeData" @select="selectTree"/>
      </a-col>
      <a-col :md="20">
        <my-table></my-table>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import MyTable from '@/components/tools/MyTable'
export default {
  data() {
    return {
      treeData: [
        { title: "Expand to load", key: "0" },
        { title: "Expand to load", key: "1" },
      ]
    };
  },
  components: {
    MyTable
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
    selectTree(selectKey){
      console.log(selectKey)
    }
  }
};
</script>

<style>
</style>
