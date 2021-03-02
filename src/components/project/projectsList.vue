<template>
    <div>
        <v-row>
            <v-col xs='12' sm="12" md="6" lg="6" xl="6" cols="12"
            v-for="(project, index) in projectsList" :key="index"
            >
                <v-card
                    @click="setProject(project)"
                    :to="{ name : 'project-detail', 
                        params : { projectId : project.id, description : project.project_description }}"
                >
                    <v-card-title>
                        {{ project.name }}
                    </v-card-title>
                    <v-card-subtitle>
                        <p>Steps is done: {{project.count_completed_steps }}</p>
                    </v-card-subtitle>  
                    <v-progress-linear
                        :value="project.percent_of_completed"
                        color="amber"
                        height="25"
                        rounded
                    ></v-progress-linear>
                </v-card>
            </v-col>
        </v-row>
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
            getProjects : "projects/fetchProjects",
            setCurrentProject : "projects/setCurrentProject"
        }),

        setProject(project){
            this.setCurrentProject(project)
        },
    },

    mounted(){
        this.getProjects()
    }

}

</script>