import axiosInst from '@/axios/customAxios'

const axios = axiosInst

export default {
    state : {
        todosData : [],
    },

    mutations : {

        setUserTodos(state, data){
            state.todosData = data
        },

        updateTodoList(state, data){
            let todo = state.todosData.find(todo => todo.id === data.id)
            Object.assign(todo, data);
        }

    },

    actions : {

       async fetchUserTodos(context){
           let { data } = await axios.get("api/todos/todo-list")
           context.commit("setUserTodos", data)
       },

       async changeTodoStatus(context, todo){
           let { data } = await axios.put(`api/todos/todo/${todo.id}/`, todo)
           context.commit("updateTodoList", data)
       }

    },

    getters : {
        getUserTodos : state => state.todosData
    }

}