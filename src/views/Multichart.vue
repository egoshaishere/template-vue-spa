<template>
<div>
    <MultichartBase />
    <LineMultiChart />
</div>
  
</template>

<script>
import MultichartBase from '../components/MultichartBase.vue'
import LineMultiChart from '@/components/LineMultiChart.vue'

export default {
    name: "MultiChart",
    components: {
        LineMultiChart,
        MultichartBase
    }

}
</script>

<style>

</style>