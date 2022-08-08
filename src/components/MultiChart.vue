<template>
  <div>
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
import { mapActions, mapGetters } from "vuex";

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
  name: "MultiChart",
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
        getTimeseriesSymbolsAction: "exchangeModule/getTimeseriesSymbolsAction",
      }),
      
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    ...mapGetters({
      getValues: "exchangeModule/getValues",
      getMarks: "exchangeModule/getMarks",
      chartData: 'multiChartModule/chartData'
    }),
  },
  methods: {
    dataDrip() {
      let loco = this.getValues;
      this.chartData.datasets[0].data = loco;
      this.chartData.labels = this.getMarks;
    },

    async getTimeseriesSymbolsMethod() {
      return await this.getTimeseriesSymbolsAction();
    },
  },
  async mounted() {
    console.log("LineChart is mounted");
    //await this.getTimeseriesSymbolsMethod()
    //this.dataDrip()
  },
};
</script>
