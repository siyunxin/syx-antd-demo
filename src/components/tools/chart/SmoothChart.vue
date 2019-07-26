<template>
    <div class="chart-wrapper">
        <v-chart :force-fit="true" :data="data" :height="height" :padding="[36, 0, 28, 0]">
            <v-tooltip/>
            <v-smooth-area position="x*y"></v-smooth-area>
        </v-chart>
    </div>
</template>

<script>
import moment from 'moment';
const data = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 10; i++) {
  data.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.round(Math.random() * 10)
  })
}
const tooltip = [
  'x*y',
  (x, y) => ({
    name: x,
    value: y
  })
]
const scale = [
    {
        dataKey: 'x',
        min: 2
    }, 
    {
        dataKey: 'y',
        title: '时间',
        min: 1,
        max: 22
    }]
export default {
    name: 'smooth-chart',
    data() {
        return {
            data,
            tooltip,
            scale,
            height: 100,

        }
    },

}
</script>

<style>
   
</style>
