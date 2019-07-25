<template>
    <div class="chart-wrapper">
        <v-chart :force-fit="true" :data="data" :height="height" :padding="[36, 5, 18, 5]" :scale="scale">
            <v-tooltip/>
            <v-bar position="year*sales"></v-bar>
        </v-chart>
    </div>
</template>

<script>
const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
    { year: '1959 年', sales: 80 },
  ];
  
const scale = [{
    dataKey: 'sales',
    tickInterval: 20,
  }];

export default {
    name: 'bar-chart',
    data() {
         return {
             data,
             scale,
             height: 100,
         }
    },
}
</script>

<style>

</style>
