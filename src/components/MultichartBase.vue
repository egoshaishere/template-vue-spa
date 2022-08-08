<template>
  <div class="multichart">
    <v-flex row class="mt-1">
      <v-col cols="1">
        <v-select
          v-model="select"
          :hint="`${select.state}, ${select.abbr}`"
          :items="items"
          item-text="state"
          item-value="abbr"
          label="Select"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: "MultiChartBase",
  data() {
    return {
      select: { state: "Florida", abbr: "FL" },
      items: [
        { state: "Florida", abbr: "FL" },
        { state: "Georgia", abbr: "GA" },
        { state: "Nebraska", abbr: "NE" },
        { state: "California", abbr: "CA" },
        { state: "New York", abbr: "NY" },
      ],
    };
  },
};
</script>

<style>

.multichart {
    border: solid 2px lightgreen;
}
</style>