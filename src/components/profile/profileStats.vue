<template>
  <div>
    <v-row justify="center" class="mt-5">
        <v-col xs='12' sm="12" md="8" lg="8" xl="8" cols="12">
          <Bar />
        </v-col>
    </v-row>
  </div>
</template>

<script>

import Bar from "./userStats"

export default {
    
  components : {
    Bar
  }

}
</script>