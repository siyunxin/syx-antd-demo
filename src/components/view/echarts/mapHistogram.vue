<template>
<!-- 映射柱状图 -->
  <div class="histogram" id="mapHistogram"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      
    };
  },
  methods: {},
  components: {},
  mounted() {
    var myChart = echarts.init(document.getElementById("mapHistogram"));
    myChart.setOption({
            title: {
            text: "映射柱状图",
            x: "center"
        },
      dataset: {
        
        source: [
          ["score", "amount", "product"],
          [89.3, 58212, "Matcha Latte"],
          [57.1, 78254, "Milk Tea"],
          [74.4, 41032, "Cheese Cocoa"],
          [50.1, 12755, "Cheese Brownie"],
          [89.7, 20145, "Matcha Cocoa"],
          [68.1, 79146, "Tea"],
          [19.6, 91852, "Orange Juice"],
          [10.6, 101852, "Lemon Juice"],
          [32.7, 20112, "Walnut Brownie"]
        ]
      },
      grid: { containLabel: true },
      xAxis: {},
      yAxis: { type: "category" },
      series: [
        {
          type: "bar",
          encode: {
            // Map the "amount" column to X axis.
            x: "amount",
            // Map the "product" column to Y axis
            y: "product"
          }
        }
      ]
    });
  }
};
</script>
<<!-- 折线图 -->
<style scoped>
.histogram {
  width: 100%;
  height: 100%;
  padding-top: 15px;
}
</style>

