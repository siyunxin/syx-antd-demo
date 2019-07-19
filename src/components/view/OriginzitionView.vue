<template>
  <div class="originzition-wrapper">
    <a-row :gutter="24">
      <a-col :md="8">
        <a-tree :loadData="onLoadData" :treeData="treeData" />
      </a-col>
      <a-col :md="16"></a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      treeData: [
        { title: "Expand to load", key: "0" },
        { title: "Expand to load", key: "1" },
      ]
    };
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
    }
  }
};
</script>

<style>
</style>
