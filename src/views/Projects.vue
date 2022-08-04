<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-expansion-panels  class="pa-16">
      <v-expansion-panel v-for="project in myProjects" :key="project.title">
        <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card flat>
            <v-card-text class="px-4 py-0 grey--text">
              <div class="font-weight-bold">due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data(){
    return {
      projects: [
        {title: 'тыц', due: '666-13-13', content: 'azazazaza!!!!11', field: 'show'},
        {title: 'puk', due: '666-13-13', content: 'azazazaza!!!!11', field: 'show'},
        {title: 'puk', due: '666-13-13', content: 'azazazaza!!!!11', field: 'show'},
        {title: 'ряяяя', due: 'end of tha world', content: 'lord is coming unfortunately not cumming', field: 'show'},
        {title: 'azazaza', due: '666-13-13', content: 'azazazaza!!!!11', field: 'not show'},
      ]
    }
  },
  computed: {
    myProjects(){
      return this.projects.filter(project => {
        return project.field === 'show'
      })
    }
  }
};
</script>

<style>
</style>