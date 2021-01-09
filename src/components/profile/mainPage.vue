<template>
    <div>
        <v-row justify="center">
            <v-img
                class="rounded-circle my-2"
                max-width="250"
                max-height="250"
                :src="`http://127.0.0.1:8000${getProfileData.user_picture}`"
            />
        </v-row>
        <v-row justify="center">
            <v-col xs='12' sm="12" md="8" lg="8" xl="8" cols="12">
                <v-text-field
                    label="Username"
                    readonly
                    outlined
                    :value="getProfileData.username"
                />
                <v-text-field
                    label="First name"
                    readonly
                    outlined
                    :value="getProfileData.first_name ?  getProfileData.first_name : 'Пусто' "
                />
                <v-text-field
                    label="Last name"
                    readonly
                    outlined
                    :value="getProfileData.last_name ? getProfileData.last_name : 'Пусто'"
                />
                <v-text-field
                    label="Email"
                    readonly
                    outlined
                    :value="getProfileData.email ? getProfileData.email : 'Пусто'"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
    
    computed : {
        ...mapGetters(["getProfileData"])
    },

    methods : {
        ...mapActions(["fetchUserProfileData"])
    },

    mounted(){
        this.fetchUserProfileData()
    }

}
</script>