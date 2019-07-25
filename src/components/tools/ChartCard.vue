<template>
  <a-card :loading="false" :bordered="false" :body-style="{ padding: '20px 24px 8px' }">
    <header class="chart-card-header">
      <div class="header-area">
        <div class="chart-title-box">
            <span class="">{{ title }}</span>
            <span class="chart-top-right-icon">
                <a-icon type="question-circle" />
            </span>
        </div>
        <div class="chart-count">
            {{ total }}
        </div>
      </div>
    </header>
    <main class="chart-card-content">
        <div class="content-area">
            <slot name="chart">

            </slot>
        </div>
    </main>
    <footer class="chart-card-footer">
        <div class="footer-area">
            <slot name="footer">

            </slot>
        </div>
    </footer>
  </a-card>
</template>

<script>
export default {
  props:{
      title:{
          type: String,
          default: ''
      },
      total: {
          type: [Number,String],
          default: 0,
          required: false
      }
  },  
  name: "chart-card",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
.chart-card-header {
    width: 100%;
    position: relative;
    .chart-count{
        font-size: 24px;
        font-weight: 500px;
    }
    .chart-title-box{
        position: relative;
        .chart-top-right-icon{
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
        }
    }
}
.chart-card-content{
    width: 100%;    
    height: 54px;
    position: relative;
    .content-area {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
}
.chart-card-footer{
    border-top: 1px solid #e8e8e8;
    .footer-area{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
    }
}
</style>
