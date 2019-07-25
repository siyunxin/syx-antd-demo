<template>
  <!-- 复杂柱状图 -->
  <div class="histogram" id="histogram"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      legendArr: [],
      color: this.$store.state.color,
      styleArr: [],
      myChart: {},
      name: "复杂柱状图"
    };
  },
  methods: {},
  components: {},
  mounted() {
    var myChart = echarts.init(document.getElementById("histogram"));
    myChart.setOption({
          title: {
            text: "柱状图",         
        },
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ["product", "2015", "2016", "2017"],
          ["Matcha Latte", 43.3, 85.8, 93.7],
          ["Milk Tea", 83.1, 73.4, 55.1],
          ["Cheese Cocoa", 86.4, 65.2, 82.5],
          ["Walnut Brownie", 72.4, 53.9, 39.1]
        ]
      },
      xAxis: { type: "category" },
      yAxis: {},
      series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
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

