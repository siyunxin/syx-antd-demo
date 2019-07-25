<template>
<!-- echarts显示入口 -->
  <div class="echarts">
    <div class="flex-container column">
      <div
        class="item"
        @click="clickChart('1')"
        style="transform: translate(-22.4%,-33.5%) scale(0.33)"
      >
        <histogram></histogram>
      </div>
      <div
        class="item"
        @click="clickChart('2')"
        style="transform: translate(-22.4%,0.5%) scale(0.33)"
      >
        <pie></pie>
      </div>
      <div
        class="item"
        @click="clickChart('3')"
        style="transform: translate(-22.4%,34.5%) scale(0.33)"
      >
        <map-histogram></map-histogram>
      </div>
      <div
        class="item active"
        @click="clickChart('4')"
        style="transform: translate(43.7%, 0) scale(1)"
      >
        <point></point>
      </div>
    </div>
  </div>
</template>
<script>
import histogram from "./histogram";
import pie from "./pie";
import point from "./point";
import mapHistogram from "./mapHistogram";
export default {
  data() {
    return {
      items: []
    };
  },
  components: {
    histogram,
    pie,
    point,
    mapHistogram
  },
  mounted() {
    //   将所有echart图push到数组item中并设置order
    this._init();
  },
  methods: {
    _resize() {
      this.$root.charts.forEach(myChart => {
        myChart.resize();
      });
    },
    _init() {
      this.items = document.querySelectorAll(".flex-container .item");
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].dataset.order = i + 1;
      }
    },
    clickChart(clickIndex) {
      let activeItem = document.querySelector(".flex-container .active");
      let activeIndex = activeItem.dataset.order;
      let clickItem = this.items[clickIndex - 1];

      if (activeIndex === clickIndex) {
        //   如果点击的是显示的大图的echarts
        return;
      }
      activeItem.classList.remove("active");
      clickItem.classList.add("active");
      this._setStyle(clickItem, activeItem);
    },
    _setStyle(el1, el2) {
      let transform1 = el1.style.transform;
      let transform2 = el2.style.transform;
      el1.style.transform = transform2;
      el2.style.transform = transform1;
    }
  }
};
</script>
<style scope>
body {
  box-sizing: border-box;
}

.item {
  padding: 0px;
  margin: 0px;
  width: 68%;
  height: 100%;
  position: absolute;
  transform: scale(0.33);
  text-align: center;
  transition: all 0.8s;
  background: rgb(253, 250, 250);
}
.echarts {
  position: relative;
  width: 100%;
  height: 650px;
  margin: 0px;
  padding: 0px;
  padding-top: 1.5%;
}
.flex-container.column {
  position: relative;
  height: 90%;
  width: 90%;
  overflow: hidden;
  margin: 0 auto 100px auto;
  box-sizing: content-box;
}
.active {
  height: 100%;
  width: 69%;
  margin-left: 10px;

}
</style>
