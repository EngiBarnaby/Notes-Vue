<template>
  <div>
    <v-tabs fixed-tabs>
        <v-tab :to="{ name : 'user-profile'}">Профиль</v-tab>
        <v-tab :to="{ name : 'profile-stats'}">Статистика</v-tab>
    </v-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

    computed : {
        ...mapGetters(["getProfileData"]),

        userAvatar(){
            return "http://127.0.0.1:8000/" + this.getProfileData.user_picture
        }

    },
    
    data(){
        return {
            selectedItem: 0,
            userOptions : [
                { text: 'Профиль', icon: 'mdi-account-circle-outline', name : "user-profile" },
                { text: 'Статистика', icon: 'mdi-chart-bar', name : "profile-stats" },
                // { text: 'Starred', icon: 'mdi-star', name : "user-profile" },
                // { text: 'Recent', icon: 'mdi-history', name : "user-profile" },
                // { text: 'Offline', icon: 'mdi-check-circle', name : "user-profile" },
                // { text: 'Uploads', icon: 'mdi-upload', name : "user-profile" },
                // { text: 'Backups', icon: 'mdi-cloud-upload', name : "user-profile" },
            ],
        }
    }

}
</script>

<!-- <v-card
            width="256"
            tile
        >
            <v-navigation-drawer permanent>
                <v-system-bar></v-system-bar>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar >
                            <v-img :src="`http://127.0.0.1:8000${getProfileData.user_picture}`"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>

                    <v-list-item link>
                        <v-list-item-content>
                        <v-list-item-title class="title">
                            {{ getProfileData.username }}
                        </v-list-item-title>
                            <v-list-item-subtitle>{{ getProfileData.email }}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-icon>mdi-menu-down</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list
                nav
                dense
                >
                <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                >
                    <v-list-item
                    v-for="(item, i) in userOptions"
                    :key="i"
                    :to="{ name : item.name }"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </v-card> -->