<template>
  <div class="team">
    <h1 class="subheading grey--text view__title">Team</h1>

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card elevation="2" flat class="text-center ma-3">
            <v-responsive class="pt-4"> 
              <v-avatar class="grey lighten-2" size="100">
                <img :src="person.avatar">
              </v-avatar>  
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text flat color="grey">
                <v-icon small left>message</v-icon>
                <span class="">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>

//https://www.flaticon.com/packs/in-the-zoo-10
//Thanks to Freepik on flaticon for nice and pretty images

export default {
  name: "Team",
  data() {
    return {
      team: [
        { name: "The Net Ninja", role: "Web developer", avatar:'/bear.png' },
        { name: "Ryu", role: "Graphic designer", avatar:'/cat.png' },
        { name: "Chun Li", role: "Web developer", avatar:'/dog.png' },
        { name: "Gouken", role: "Social media maverick", avatar:'/rabbit.png' },
        { name: "Yoshi", role: "Sales guru", avatar:'/weasel.png' },
      ],
    };
  },
};
</script>

<style>
</style>