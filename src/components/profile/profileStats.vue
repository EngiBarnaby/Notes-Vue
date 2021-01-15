<template>
  <div>
    <h2 class="charts-lable text-center mt-5">Выполнено заданий за неделю</h2>
    <v-row justify="center">
        <v-col xs='12' sm="12" md="8" lg="8" xl="8" cols="12">
          <Bar />
        </v-col>
    </v-row>
    <h2 class="charts-lable text-center mt-5">Количество заметок по категориям</h2>
    <v-row justify="center">
      <v-col xs='8' sm="8" md="5" lg="5" xl="5" cols="9">
        <Pie />
      </v-col>
    </v-row>
  </div>
</template>

<script>

import Bar from "./userCompleteStats"
import Pie from "./userCategoryStats"
import { mapActions } from "vuex"


export default {
    
  components : {
    Bar,
    Pie
  },

  methods : {
    ...mapActions(["fetchUserStats"]),
  },

  async mounted () {
    await this.fetchUserStats()
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

.charts-lable {
  font-family: 'Noto Sans JP', sans-serif;
}

</style>