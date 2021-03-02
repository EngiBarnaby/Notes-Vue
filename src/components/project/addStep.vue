<template>
    <div class="px-10">
        <v-row justify="center">
            <v-col xs='12' sm="12" md="10" lg="10" xl="10" cols="12">
                <v-text-field
                    v-model="stepTitle" 
                    label="Название "
                />
                <v-text-field 
                    v-model="stepDescription"
                    label="Дополнительная информация"
                />
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-btn 
                x-large 
                outlined
                @click="addStep"
            >
                Добавить шаг
            </v-btn>
        </v-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
    
    data(){
        return{
            stepTitle : "",
            stepDescription : "",
        }
    },

    computed : {
        ...mapGetters({
            currentProject : "projects/projects/getProjectDetail"
        })
    },

    methods : {
        ...mapActions({
            addStepInProject : "projects/addStepInProject",
        }),

        addStep(){
            let step = { 
                title : this.stepTitle, 
                description : this.stepDescription, 
                project : this.currentProject.id,
                completed : false,  }
            this.addStepInProject(step)
        }

    }



}
</script>