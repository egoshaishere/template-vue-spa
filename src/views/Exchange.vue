<template>
  <div>
    <div>exchange rates</div>

    <div class="printer__container">
      <div
        class="printer__fabrique"
        v-for="(item, index) in Object.entries(getTimeseriesSymbolsRates)"
        :key="index">
        {{item[0]}}
        <div  v-for="(subItem, index) in Object.entries(item[1])"
        :key="index">
        {{ subItem[0] }} {{subItem[1]}}
        </div>
      </div>
    </div>

    <div class="box">
      <v-btn class="butt" v-on:click="getRatesMethod">rates</v-btn>
      <v-btn class="butt" v-on:click="getTimeseriesMethod">timeseries</v-btn>
      <v-btn class="butt" v-on:click="getTimeseriesSymbolsMethod"
        >timeseries + symbols</v-btn
      >
      <div class="title">{{ getResponse }}</div>
    </div>
  </div>
</template>

<script>
//https://vue-chartjs.org/guide/
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "Exchange",
  data() {
    return {
      ...mapActions({
        getLatest: "exchangeModule/getLatest",
        getTimeseries: "exchangeModule/getTimeseries",
        getTimeseriesSymbols: "exchangeModule/getTimeseriesSymbols",
      }),
    };
  },
  computed: {
    ...mapGetters({
      getResponse: "exchangeModule/getResponseJSON",
      getTimeseriesSymbolsRates: "exchangeModule/getTimeseriesSymbolsRates",
    }),
  },
  methods: {
    getRatesMethod() {
      this.getLatest();
    },
    getTimeseriesMethod() {
      this.getTimeseries();
    },
    getTimeseriesSymbolsMethod() {
      this.getTimeseriesSymbols();
    },
  },
};
</script>

<style>
.printer__container {
}

.printer__fabrique {
  display: flex;
  flex-direction: row;
}
</style>