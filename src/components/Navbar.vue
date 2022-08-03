<template>
  <nav>
    <v-app-bar flat app>
      <v-icon class="grey--text" v-on:click="navOpenCloseHandler">
        mdi-menu
      </v-icon>

      <v-toolbar-title class="text-uppercase grey--text toolbar__title">
        <span class="font-weight-light">Egosha</span>
        <span>IsHere</span>
      </v-toolbar-title>

      <v-spacer />

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon> mdi-login </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="isOpen" app class="primary">

      <v-list>


        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{link.text}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>


      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>



export default {
  name: "Navbar",
  components: {
  },
  data() {
    return {
      isOpen: false,
      links: [
        {icon: 'dashboard', text: 'Dashboard', route: '/'},
        {icon: 'folder', text: 'My Projects', route: '/projects'},
        {icon: 'person', text: 'Team', route: '/team'},
        {icon: 'map', text: 'Map', route: '/map'},
      0]
    };
  },
  methods: {
    navOpenCloseHandler() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.toolbar__title {
  margin-left: 50px;
}
</style>