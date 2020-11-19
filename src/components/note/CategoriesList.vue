<template>
    <div>
        <v-row>
            <template v-for="item in getCategories">
                <v-col :key="item.title" xs='10' sm="10" md="6" lg="6" xl="6    " cols="10">
                    <router-link :to="{ name : 'notes', params : { title : item.title }}" class="text-decoration-none">
                        <v-card class="pa-2 testBlock">
                            <v-card-title primary-title>
                                {{ item.title }}
                            </v-card-title>
                        </v-card>
                    </router-link>
                </v-col>
            </template >
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
    
data(){
        return {
            notes : {}
        }
    },

    methods : {
        ...mapActions(["fetchNotesCategories"])
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

.testBlock {
    background-color: #8144D6;
}
.testBlock:hover {
    background-color: #510FAD;
}

</style>