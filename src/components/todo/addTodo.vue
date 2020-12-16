<template>
    <div class="px-10">
        <v-row justify="center">
            <v-col xs='12' sm="12" md="10" lg="10" xl="10" cols="12">
                <v-text-field
                    v-model="title" 
                    label="Задание"
                />
                <v-text-field 
                    v-model="subtext"
                    label="Дополнительная информация"
                />
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-btn 
                x-large 
                outlined 
                @click="addTodo"
            >
                Дабавить задание
            </v-btn>
        </v-row>
    </div>
</template>

<script>
import { mapActions } from "vuex"

export default {

    data(){
        return {
            title : "",
            subtext : "",
        }
    },

    methods : {

        ...mapActions(["addTodoInBase"]),

        addTodo(){
            let todo = { "title" : this.title, "subtext" : this.subtext, "completed" : false }
            this.addTodoInBase(todo)
            this.title = this.subtext = ""
        }

    }

}

</script>