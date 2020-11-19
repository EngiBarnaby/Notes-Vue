<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-nav-icon @click="sidebar=!sidebar">
    </v-app-bar-nav-icon>

    <v-toolbar-title class="hidden-xs-only">My Note</v-toolbar-title>

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
  </div>
</template>

<script>
export default {
  
  data(){
    return {
      sidebar : false,

      menuItems : [
        { title : "Title", path : "/", icon : "mdi-home" },
        { title : "Note", path : "/note", icon : "mdi-notebook-edit-outline" },
        { title : "Test", path : "/tets", icon : "mdi-content-paste" },
      ]

    }
  }

}
</script>