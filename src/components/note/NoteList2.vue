<template>
    <div>
        <!-- <v-row>
            <v-col xs='12' sm="12" md="12" lg="12" xl="12" cols="12" class="mb-5">
                <v-toolbar
                    color="white"
                    flat
                >
                <v-btn
                    icon
                    light
                    :to="{ name : 'categiries'}" class="text-decoration-none"
                >
                    <v-icon color="grey darken-2">
                    mdi-arrow-left
                    </v-icon>
                </v-btn>

                <v-toolbar-title class="grey--text text--darken-4">
                    Категорий
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn
                    icon
                    light
                >
                    <v-icon color="grey darken-2">
                    mdi-magnify
                    </v-icon>
                </v-btn>
                </v-toolbar>
            </v-col>
        </v-row> -->
        <!-- <v-row justify="center">
                <v-btn
                    class="mx-2"
                    fab
                    large
                    dark
                    color="indigo"
                    :to="{ name : 'add-note'}"
                    >
                    <v-icon dark>
                        mdi-plus
                    </v-icon>
                </v-btn>
        </v-row> -->
        <v-row>
            <v-col xs='4' sm="4" md="4" lg="4" xl="4" cols="4" class="mt-6">
                <v-card v-for=" note in getNotes" 
                        :key="note.id" 
                        height="200" 
                        :to="{ name : 'note2', params : {NoteId : note.id}}"
                        @click="getNotedetail(note.id)"
                        link
                        >
                    <v-card-title>
                        {{ note.title }}
                    </v-card-title>
                    <v-card-subtitle>
                        {{ note.description }}
                    </v-card-subtitle>
                </v-card>
            </v-col>
            <v-col xs='8' sm="8" md="8" lg="8" xl="8" cols="8" class="note-detail  mt-6">
                <router-view></router-view>
            </v-col>
        </v-row>
        <div class="addBtn">
            <v-btn
                class="mx-2"
                fab
                large
                dark
                color="indigo"
                :to="{ name : 'add-note'}"
                >
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {

    methods : {
        ...mapActions(["fetchNotesSortedByCatgory", "fetchNoteDetail"]),

        getNotedetail(NoteId){
            this.fetchNoteDetail(NoteId)
        },

    },

    computed : {
        ...mapGetters(["getNotes", "getCurrentCat"])
    },

    async mounted(){
        await this.fetchNotesSortedByCatgory(this.getCurrentCat)
    }

}
</script>

<style scoped>

</style>