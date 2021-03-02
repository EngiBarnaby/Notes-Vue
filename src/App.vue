<template>
<v-app>
  <Header />
  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid class="pa-0 ma-0">

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  
</v-app>
</template>

<script>
import Header from './components/base/Header';


export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
