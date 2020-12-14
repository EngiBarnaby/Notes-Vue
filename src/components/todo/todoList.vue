<template>
    <div>
        <v-list>
            <v-row>
                <v-col xs='12' sm="12" md="12" lg="12" xl="12" cols="12">
                    <div v-for="todo in sortTodos" :key="todo.id">
                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title 
                                    class="font-weight-medium title"
                                    v-text="todo.title">
                                </v-list-item-title>
                                <v-list-item-subtitle v-text="todo.subtext"></v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn icon v-if="!todo.completed" @click="changeStatus(todo)">
                                    <v-icon color="grey lighten-1">mdi-checkbox-blank-circle-outline</v-icon>
                                </v-btn>
                                <v-btn icon v-if="todo.completed" @click="turnStatus(todo)">
                                    <v-icon color="green lighten-1" large>mdi-check-bold</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                        <v-divider></v-divider>
                    </div>
                </v-col>
            </v-row>
        </v-list>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
    
    data(){
        return {
            todos : [],
        }
    },

    computed : {
        ...mapGetters(["getUserTodos"]),

        sortTodos(){
            return this.getUserTodos.slice().sort((a, b) => a.completed - b.completed)
        }

    },

    methods : {
        ...mapActions(["fetchUserTodos", "changeTodoStatus"]),

        changeStatus(todo){
            // console.log(todo.id);
            todo.completed = true
            this.changeTodoStatus(todo)
        },

        turnStatus(todo){
            todo.completed = false
            this.changeTodoStatus(todo)
        }

    },

    mounted(){
        this.fetchUserTodos()
    }

}
</script>


<style scoped>

.todo {
    border: 1px solid black;
}

</style>