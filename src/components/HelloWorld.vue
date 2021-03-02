<template>
  <v-container fluid fill-height class="pa-0">
    <div class="main-page-first align-center">
        <div class="main-page-content">
          <v-row justify="center">
            <div class="text-h3 mt-10" text-center >
              Давайте попробуем стать немного продуктивнее
            </div>
            <div class="text-h5 mt-5" text-center >
              Сайт ставит своей целью сделать нашу жинь немного организованее 
            </div>
          </v-row>
        </div>
    </div>
    <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"

          reverse-transition="fade-transition"
          transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>
  </v-container>
  <!-- <v-container>
    <v-row justify="center">
      <h2 class="text-center">Сайт предоставляет вести заметки, составлять ToDo лист и собирать статистику о своей эфективности</h2>
    </v-row>
    <v-row justify="center" >
      <h3 class="text-center">
        Сайт сделан с использование django и vue
      </h3>
    </v-row>
    <v-row class="my-5" justify="space-around">
        <div>
          <v-img
            contain
            max-height="180"
            max-width="180"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
          ></v-img>
            <h4>Список библиотек для vue</h4>
            <div class="ml-3">
              <h3 class="font-weight-medium" v-for="(item, index) in vueLibs" :key="index">
                {{ item.title }}
              </h3>
            </div>
        </div>
        <div>
          <v-img
            max-height="200"
            max-width="200"
            contain
            src="https://img.icons8.com/material-sharp/452/django.png"
          ></v-img>
            <h4>Список библиотек для django</h4>
            <div class="ml-3">
              <h3 class="font-weight-medium" v-for="(item, index) in djangoLibs" :key="index">
                {{ item.title }}
              </h3>
            </div>
        </div>
    </v-row>
    <h1>Описание фунуционала</h1>
    <div v-for="(item, index) in menuItems" :key="index">
      <v-row>
          <v-icon x-large>{{ item.icon }}</v-icon>
          <h2 class="mx-5">{{ item.title }}</h2>
      </v-row>
    </div>
  </v-container> -->
</template>

<script>
  import axiosInst from '@/axios/customAxios'
  export default {

    name: 'HelloWorld',

    methods : {

      async getTest(){
        let {data} = await axiosInst.get("api/notes/api-test")
        console.log(data);
      }

    },

    data(){
      return {
        menuItems : [
          { title : "Главная страница", path : "/", icon : "mdi-home" },
          { title : "ToDo лист", path : "/todo", icon : "mdi-list-status" },
          { title : "Note", path : "/note", icon : "mdi-notebook-edit-outline" },
          { title : "Test", path : "/test", icon : "mdi-content-paste" },
        ],

        vueLibs : [
          { title : "vue-router" },
          { title : "vuetify" },
          { title : "vuex" },
          { title : "vue-chartjs" },
          { title : "axios" },
          { title : "vee-validate" },
        ],

        djangoLibs : [
          { title : "Django3"},
          { title : "django rest framework" },
          { title : "djangorestframework-simplejwt" },
          { title : "django-cors-headers" },
        ],

        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src : "@/assets/Smart_Rat2.jpg",
          },
        ],

      }
    }

  }
</script>

<style scoped>

.main-page-first {
  background-color: rgb(224, 233, 240);
  height: 450px;
}

.main-page-content {
  margin-top: 150px;
}

</style>