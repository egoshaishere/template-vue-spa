<template>
  <div>
    <v-btn v-on:click="click">test</v-btn>


    <div class="test" v-if="prz"></div>
  </div>
</template>

<script>
export default {
    name: "Sandbox",
    data() {
      return {
        prz: false

      }
    },
    methods: {
        click(){
            console.log('uipg')
            console.log(this.prz)
            this.prz = !this.prz
        }
    }
}
</script>

<style>

.test {
  border: solid 2px red;
  width: 300px;
  height: 150px;
}

</style>