<template>
    <v-container 
        fluid fill-height
        >
        <v-layout class="split" :hide-default-footer="true">
                <section class="left">
                    <v-card v-for=" note in getNotes" 
                            :key="note.id" 
                            :to="{ name : 'note2', params : {NoteId : note.id}}"
                            @click="getNotedetail(note.id)"
                            link
                            class="left-item"
                            width="500"
                            >
                        <v-card-title>
                            {{ note.title }}
                        </v-card-title>
                        <v-card-subtitle>
                            {{ note.description }}
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-btn
                                color="deep-purple lighten-1"
                                text
                                
                            >
                                Delete
                            </v-btn>
                            <v-btn
                                color="deep-purple lighten-1"
                                text
                                
                            >
                                Edit
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </section>
                <section class="right">
                    <router-view></router-view>
                </section>
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
            </v-layout>
        </v-container>
    <!-- <div class="list-notes">
        <v-row>
            <v-col xs='4' sm="4" md="4" lg="4" xl="4" cols="4" class="mt-6">
                <v-card v-for=" note in getNotes" 
                        :key="note.id" 
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
                    <v-card-actions>
                        <v-btn
                            color="deep-purple lighten-1"
                            text
                            
                        >
                            Delete
                        </v-btn>
                        <v-btn
                            color="deep-purple lighten-1"
                            text
                            
                        >
                            Edit
                        </v-btn>
                    </v-card-actions>
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
    </div> -->
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

/* .list-notes {
    height: 100%;
    margin-bottom: 200px;
} */

.addBtn {
    position: fixed;
    bottom: 20px;
    right: 10px; 
}
.split {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.left {
  /* background-color: teal; */
  overflow-y: scroll; /* it works! */
}
.right {
  flex: 1;
  margin-top: 15px;
  /* background-color: orange; */
  overflow-y: scroll; /* it works! */
}
/* .left-item {
  background-color: magenta;
  border-radius: 5px;
  margin: 15px;
} */
/* .right-item {
  background-color: greenyellow;
  border-radius: 5px;
  margin: 15px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
} */



</style>