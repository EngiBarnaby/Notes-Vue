<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-nav-icon @click="sidebar=!sidebar">
    </v-app-bar-nav-icon>

    <router-link to="/" tag='button'>
      <v-app-bar-nav-icon>
          <v-icon>mdi-cupcake</v-icon>
      </v-app-bar-nav-icon>
    </router-link>

      <v-toolbar-title class="hidden-xs-only mr-4">
          My Note
      </v-toolbar-title>
      <v-toolbar-title
        v-if="getUsername" 
        class="hidden-xs-only"
      >
         {{ getUsername }}    
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/EngiBarnaby/Notes-Vue"
        target="_blank"
        text
      >
        <span class="mr-2">Ссылка на github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
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
            ]
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