<template>
   <div class="multipleColumn">
  <!-- <v-header :name="name" :legendArr="legendArr" :myChart="myChart"></v-header>
  <v-filter :myChart="myChart" v-if="myChart._dom"></v-filter> -->
    <div class="main" id="main"></div>
    <div class="main1" id="main1">

    </div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      legendArr: [],
      color: this.$store.state.color,
      styleArr: [],
      myChart: {},
      name: '复杂柱状图'
    }
  },
  methods: {
  },
  components: {

  },
  mounted() {
 var myChart1 = echarts.init(document.getElementById('main1'));
 
 var myChart = echarts.init(document.getElementById('main'));
 myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
// 绘制图表
myChart1.setOption({
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ]
        }
    ]
})
}
}
</script>
<<!-- 折线图 -->
<style scoped>
.multipleColumn{
  height: 1000px;
  /* background: url('../../assets/bg.jpg') no-repeat; */
  background-size :100% 100%;
  display: flex;
  }
  .main{
    width: 40%;
    height :calc(50% - 100px);
    margin-top :-15px;
    }
     .main1{
    width: 40%;
    height :calc(50% - 100px);
    margin-top :-15px;
    }
</style>

