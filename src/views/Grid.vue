<template>
  <div class="grid">
    <h1 class="subheading grey--text view__title">grid system</h1>

    <v-container class="my-10">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn class="primary" outlined block>1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn color="primary" outlined block>2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn color="primary" outlined block>2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn color="primary" outlined block>2</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-space-around>
        <v-flex xs4 md3>
          <v-btn outline block class="success">1</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outline block class="success">2</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Grid",
};
</script>

<style>
</style>