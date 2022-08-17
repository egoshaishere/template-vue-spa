<template>
  <div>
    <v-btn v-on:click="click">test</v-btn>

    <v-btn v-on:click="clickTest">check watch</v-btn>

    <div class="test" v-if="prz"></div>
  </div>
</template>

<script>
export default {
  name: "Sandbox",
  data() {
    return {
      prz: false,
      test: false,
    };
  },
  methods: {
    click() {
      console.log("uipg");
      console.log(this.prz);
      this.prz = !this.prz;
    },
    clickTest() {
      this.test = !this.test;
    },
  },
  watch: {
    prz() {
      console.log("watcher prz is triggered");
    },
    test() {
      console.log("watcher test is triggered");
    },
  },
};
</script>

<style>
.test {
  border: solid 2px red;
  width: 300px;
  height: 150px;
}
</style>