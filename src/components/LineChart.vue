<template>
  <div>
    <v-btn class="butt" v-on:click="getTimeseriesSymbolsMethod"
      >timeseries + symbols</v-btn
    >

    <v-btn class="butt" v-on:click="dataDrip"
      >drip</v-btn
    >

    <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
//https://codesandbox.io/s/github/apertureless/vue-chartjs/tree/main/legacy/sandboxes/line?file=/src/components/Line.vue
//https://apilayer.com/marketplace/exchangerates_data-api#pricing-tab

import { Line as LineChartGenerator } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

const LABELS = "";
const DATA = "";

export default {
  name: "LineChart",
  components: {
    LineChartGenerator,
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      ...mapActions({
        getTimeseriesSymbols: "exchangeModule/getTimeseriesSymbols",
      }),
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Курс доллара к Рублю",
            backgroundColor: "#f87979",
            data: [40, 39, 10, 40, 39, 80, 40],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    ...mapGetters({
      getResponse: "exchangeModule/getResponseJSON",
      getTimeseriesSymbols: "exchangeModule/getTimeseriesSymbols",
      getValues: "exchangeModule/getValues",
      getMarks: "exchangeModule/getMarks",
    }),
  },
  methods: {
    dataDrip() {
      //console.log('old data', this.chartData.datasets[0].data)
      //this.chartData.datasets[0].data = [25,46,78,14,54,87,215]

      let loco = this.getValues;
      //console.log('new data', loco)
      this.chartData.datasets[0].data = loco;

      this.chartData.labels = this.getMarks;
    },
    getTimeseriesSymbolsMethod() {
      this.getTimeseriesSymbols();
    },
  },
  mounted() {
    console.log("LineChart is mounted");

    //this.dataDrip();
  },
};
</script>
