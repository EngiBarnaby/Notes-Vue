<template>
    <div>
        <add-step />
        <h3>{{ projectDetail }}</h3>        
        <div 
            v-for="(step, index) in projectDetail" 
            :key="index"
            class="my-5"
        >
            <v-card  >
                <v-card-title primary-title>
                    {{ step.title }} <h3 v-if="step.completed"> - DONE</h3>
                </v-card-title>
                <v-card-text>
                    {{ step.description }}
                </v-card-text>
                <v-card-actions>
                    <v-btn 
                        outlined
                        small
                        @click="changeStatus(step)"
                    >
                        Закончить
                    </v-btn>
                </v-card-actions>
            </v-card>
            <v-card
                v-for="(step, index) in step.sub_steps" 
                :key="index"
                class="ml-8"
            >
                <v-card-title primary-title>
                    {{ step.title }} <h3 v-if="step.completed"> - DONE</h3>
                </v-card-title>
                <v-card-text>
                    {{ step.description }}
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import AddStep from './addStep.vue'

export default {

    components : {
        AddStep
    },

    props : ["description"],
    
    computed : {
        ...mapGetters({ projectDetail : "projects/getProjectDetail",
                        currentProject : "projects/getCurrentProjectDetail"
        })
    },

    methods : {
        ...mapActions({ getProject : "projects/fetchProjectDetail",
                    changeStep : "projects/changeStepStatus",
                    }),

        changeStatus(step){
            step.completed = !step.completed
            this.changeStep(step)
        },
    },

    mounted(){
        this.getProject(this.$route.params.projectId)
    }

}
</script>