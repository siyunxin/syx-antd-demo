<template>
    <div class="dataone-wrapper" style="background:#ECECEC; padding:30px;">
        <a-row :gutter="24">
            <a-col :md="12" :sm="24" :xl="6" >
                <chart-card title="波浪图" total="500">
                    <template slot="chart">
                       <smooth-chart></smooth-chart>
                    </template>
                    <template slot="footer">
                        <div>
                            我是波浪图数据展示
                        </div>
                    </template>
                </chart-card>
            </a-col>
            <a-col :md="12" :sm="24" :xl="6">
                <chart-card title="柱状图" total="1210">
                    <template slot="chart">
                       <bar-chart></bar-chart>
                    </template>
                    <template slot="footer">
                        <div>
                            我是柱状图展示    
                        </div>
                    </template>
                </chart-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import ChartCard from '@/components/tools/ChartCard'
import SmoothChart from '@/components/tools/chart/SmoothChart'
import BarChart from '@/components/tools/chart/BarChart'

export default {
  name: 'dataone',
  data () {
    return {
      
    }
  },
  components: {
      ChartCard,
      SmoothChart,
      BarChart
  }
}
</script>
</script>

<style lang="less">
    .dataone-wrapper {

    }

</style>
