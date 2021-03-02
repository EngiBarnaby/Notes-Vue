<template>
  <div class="home" >
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <v-footer>
      <v-container fluid>
        <Footer />
      </v-container>
  </v-footer>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '@/components/base/Footer'

export default {
  name: 'Home',

  components: {
    HelloWorld,
     Footer,
  }
  
}
</script>
