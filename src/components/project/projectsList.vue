<template>
    <div>
        <v-btn 
            color="success"
        >
            Получить информацию
        </v-btn>
        <h2 v-for="(project, index) in projectsList" :key="index">
            {{ project }}
        </h2>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {

    computed : {
        ...mapGetters({
            projectsList : "projects/getProjects"
        })
    },

    methods : {
        ...mapActions({
            getProjects : "projects/fetchProjects"
        })
    },

    mounted(){
        this.getProjects()
    }

}

</script>