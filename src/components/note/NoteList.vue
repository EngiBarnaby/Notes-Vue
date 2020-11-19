<template>
    <div>
        <v-row justify="center">
            <v-col xs='12' sm="12" md="8" lg="8" xl="8" cols="12">
                <v-card
                    class="my-6"
                    elevation="4"
                    outlined
                    v-for="note in getNotes"
                    :key="note.id"
                >
                    <v-card-title>
                        {{ note.title }}
                    </v-card-title>
                    <v-card-text>
                        {{ note.description }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

    props : ["title"],
    
    data(){
        return {
            notes : {}
        }
    },

    methods : {
        ...mapActions(["fetchNotesSortedByCatgory"])
    },

    computed : {
        ...mapGetters(["getNotes"])
    },

    async mounted(){
       await this.fetchNotesSortedByCatgory(this.title)
       this.notes = this.getNotes
    }

}
</script>