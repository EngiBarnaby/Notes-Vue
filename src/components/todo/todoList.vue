<template>
    <div>
        <add-todo />
        <v-row class="d-flex justify-space-between mt-10" >
            <div class="d-flex align-start ml-15">
                <v-btn
                    icon
                    light
                    @click="checkList(-1)"
                >
                    <v-icon color="grey darken-2">
                        mdi-arrow-left
                    </v-icon>
                </v-btn>
                <span class="headline" >Назад</span>
            </div>
            <h2>Задание на {{ getUserDate }}</h2>
            <div class="d-flex align-start mr-15">
                <span class="headline" >Вперёд</span>
                <v-btn
                    icon
                    light
                    @click="checkList(1)"
                >
                    <v-icon color="grey darken-2">
                        mdi-arrow-right
                    </v-icon>
                </v-btn>
            </div>
        </v-row>
        <v-list>
            <v-row>
                <v-col xs='12' sm="12" md="12" lg="12" xl="12" cols="12">
                    <transition-group name="list" tag="div">
                        <div v-for="todo in sortTodos" :key="todo.id">
                            <v-list-item >
                                <v-list-item-content>
                                    <v-list-item-title 
                                        class="font-weight-medium title"
                                        v-text="todo.title">
                                    </v-list-item-title>
                                    <v-list-item-subtitle v-text="todo.subtext"></v-list-item-subtitle>
                                    <!-- <v-list-item-subtitle v-text="todo.created" /> -->
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
                    </transition-group>
                </v-col>
            </v-row>
        </v-list>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex"
import AddTodo from "@/components/todo/addTodo"

export default {

    components : {
        AddTodo
    },
    
    data(){
        return {
            todos : [],
            currentData : new Date().toLocaleDateString(),
        }
    },

    computed : {
        ...mapGetters(["getUserTodos", "getUserDate"]),

        sortTodos(){
            return this.getUserTodos.slice().sort((a, b) => {
                if(a.completed > b.completed) return 1;
                if(a.completed < b.completed) return -1;
                
                if(a.created < b.created) return 1;
                if(a.created > b.created) return -1;
            })
        }

    },

    methods : {
        ...mapActions(["fetchUserTodos", "changeTodoStatus"]),
        ...mapMutations(["changeDay"]),

        checkList(num){
            this.changeDay(num)
            let today = this.getUserDate
            let date = `${today.split(".")[0]}_${today.split(".")[1]}_${today.split(".")[2]}`
            this.fetchUserTodos(date)
        },

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
        let today = this.getUserDate
        let date = `${today.split(".")[0]}_${today.split(".")[1]}_${today.split(".")[2]}`
        this.fetchUserTodos(date)
    }

}
</script>


<style scoped>

.todo {
    border: 1px solid black;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-move {
  transition: transform 1s;
}

</style>