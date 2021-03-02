<template>
  <div>
    <v-app-bar
      app 
      
      color="white"
      height="100"
    >
    <v-app-bar-nav-icon @click="sidebar=!sidebar">
    </v-app-bar-nav-icon>

    <!-- <router-link to="/" tag='button'>
      <v-app-bar-nav-icon>
          <v-icon>mdi-cupcake</v-icon>
      </v-app-bar-nav-icon>
    </router-link> -->

    <router-link 
      to="/"
      >
          <v-img class="mr-3" src="@/assets/Smart_Rat2.jpg" height="50px" width="50px"> 
          </v-img>
    </router-link>

      <v-toolbar-title class="hidden-xs-only mr-4">
          <span class="site-title"> 
              Smart Rat
          </span>
      </v-toolbar-title>
      <!-- <v-toolbar-title
        v-if="getUsername" 
        class="hidden-xs-only"
      >
         {{ getUsername }}    
      </v-toolbar-title> -->

     <!-- Drop down menu -->

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="text--darken-1">
                <v-icon left>mdi-chevron-down</v-icon>
                <h3>Инструменты</h3>
            </v-btn>
        </template>
            <v-list>
                <v-list-item
                    v-for="(item,idx) in menuItems"
                    :key="idx"
                     :to="item.path"
                >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      <v-spacer></v-spacer>

      <v-toolbar-items>

        <v-btn 
          text
        >
          <h3>
            About
          </h3>
        </v-btn>

        <v-btn
          text
          :to="{ name : 'login' }"
          v-if="!getUserStatus"
        >
          <h3>
            Login
          </h3>
        </v-btn>
        <v-btn
          text
          v-if="getUserStatus"
          @click="logout"
        >
          <h3>
            Logout
          </h3>
        </v-btn>
      </v-toolbar-items>

    </v-app-bar>

    <v-navigation-drawer
      v-if="getUserStatus"
      v-model="sidebar"
      bottom
      temporary   
      app
    >
      <v-list-item>
                <v-list-item-title>Навигация</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
          <v-list-item
          v-for="item in profileMenu"
          :key="item.title"
          :to="item.path"
          link
          >
              <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>

            </v-list-item>

            <!-- Add logout -->
            <v-list-item
                    link
                    @click="logout"
                >
                    <v-list-item-icon>
                        <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Выйти</v-list-item-title>
                    </v-list-item-content>
              </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.path"
          link
          >
              <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>

          </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="sidebar"
            v-if="!getUserStatus"
            bottom
            temporary   
            app
            >
            <v-list-item>
                <v-list-item-title>Навигация</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list>
                <v-list-item
                    :to="{ name : 'login' }"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>mdi-lock-open</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Войти</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    :to="{ name : 'register' }"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>mdi-account-plus</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Регистрация</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  
  data(){
    return {
      sidebar : false,

      menuItems : [
        { title : "Главная страница", path : "/", icon : "mdi-home" },
        { title : "ToDo лист", path : "/todo", icon : "mdi-list-status" },
        { title : "Note", path : "/note", icon : "mdi-notebook-edit-outline" },
        { title : "Projects", path : "/projects", icon : "mdi-cog" },
        { title : "Test", path : "/test", icon : "mdi-content-paste" },
      ],

      profileMenu : [
                { title : 'Ваш профиль', path : `/profile`, icon : "mdi-account-circle"},
                { title : 'Статистика', path : `/profile/profile-stats`, icon : "mdi-chart-box-outline"},
            ],

      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
        ],

      }
    },

    computed : {
      ...mapGetters(["getUserStatus", "getUsername"]),
    },

    methods : {
      ...mapActions(["loginUser", "logoutUser"]),

      logout(){
        this.logoutUser()
        this.$router.push("/")
      },
    },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Girassol&display=swap');

.site-title {
  font-family: 'Cinzel Decorative', cursive;
  font-family: 'Girassol', cursive;
  font-size: 40px;
}

</style>