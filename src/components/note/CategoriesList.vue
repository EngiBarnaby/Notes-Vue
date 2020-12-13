<template>
    <div>
        <AddCategory />
        <v-row >
            <template v-for="item in getCategories">
                <v-col :key="item.id" xs='12' sm="12" md="6" lg="6" xl="6" cols="12">
                        <v-card
                            elevation="3"
                            outlined 
                            class="pa-2 testBlock">
                            <v-card-title primary-title>
                                {{ item.title }}
                            </v-card-title>
                            <v-card-actions>
                                <router-link
                                    :to="{ name : 'notes', params : { pk : item.id }}" class="text-decoration-none"
                                >
                                    <v-btn
                                        fab
                                        dark
                                        medium
                                        color="cyan"
                                        @click="setCat(item)"
                                    > 
                                        <v-icon dark>
                                            mdi-magnify
                                        </v-icon>
                                    </v-btn>
                                </router-link>
                                <v-spacer></v-spacer>
                                <v-btn
                                    fab
                                    dark
                                    small
                                    color="blue lighten-2"
                                > 
                                    <v-icon dark>
                                        mdi-lead-pencil
                                    </v-icon>
                                </v-btn>
                                <v-btn
                                    fab
                                    dark
                                    small
                                    color="red accent-2"
                                > 
                                    <v-icon dark>
                                        mdi-trash-can-outline
                                    </v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                </v-col>
            </template >
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex"
import AddCategory from '@/components/note/AddCategory'

export default {

components : {
    AddCategory
},
    
data(){
        return {
            notes : {}
        }
    },

    methods : {
        ...mapActions(["fetchNotesCategories"]),
        ...mapMutations(["setCurrentCat"]),

        setCat(cat){
            this.setCurrentCat(cat)
        }
    },

    computed : {
        ...mapGetters(["getCategories"])
    },

    async mounted(){
        await this.fetchNotesCategories()
    }

}
</script>

<style scoped>

/* .testBlock {
    background-color: #8144D6;
}
.testBlock:hover {
    background-color: #510FAD;
} */

</style>