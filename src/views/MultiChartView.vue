<template>
  <div>
    <MultichartMenu />
    <MultiChart />
  </div>
</template>

<script>
import MultichartMenu from "../components/MultichartMenu.vue";
import MultiChart from "@/components/MultiChart.vue";

export default {
  name: "MultiChartView",
  components: {
    MultiChart,
    MultichartMenu,
  },
};
</script>

<style>
</style>