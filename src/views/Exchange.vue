<template>
  <div>
    <div>exchange rates</div>
    <a href="https://www.cbr-xml-daily.ru/">Виджет курсов валют</a>

    <div>{{this.$store.state.exchange.responseJSON}}</div>
    <div>{{this.$store.state.test}}</div>
    <v-btn @click="getRatesMethod">get rates</v-btn>

    <div></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
  name: "Exchange",
  methods: {
    getRatesMethod() {
      this.getRates()
    },
    ...mapActions({
      getRates: "exchange/getRates"
  })
  },
};
</script>

<style>
</style>