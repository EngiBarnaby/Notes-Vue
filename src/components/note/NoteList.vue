<template>
    <div>
        <v-row>
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
        </v-row>
        <v-row justify="center">
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
        </v-row>
        <v-row justify="center">
            <v-col xs='12' sm="12" md="10" lg="10" xl="10" cols="12">
                <v-expansion-panels>
                    <NoteDetail 
                        v-for="note in getNotes"
                        :key="note.id"
                        :note="note"
                    />
                </v-expansion-panels>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import NoteDetail from "@/components/note/NoteDetail"

export default {

    props : ["pk"],

    components : {
        NoteDetail,

    },
    
    data(){
        return {
            notes : {}
        }
    },

    methods : {
        ...mapActions(["fetchNotesSortedByCatgory"]),
    },

    computed : {
        ...mapGetters(["getNotes", "getCurrentCat"])
    },

    async mounted(){
        await this.fetchNotesSortedByCatgory(this.getCurrentCat.id)
        this.notes = this.getNotes
    }

}
</script>