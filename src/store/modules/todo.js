import axiosInst from '@/axios/customAxios'

const axios = axiosInst

export default {
    state : {
        todosData : [],
        userDate : new Date().toLocaleDateString()
    },

    mutations : {

        setUserTodos(state, data){
            state.todosData = data
        },

        updateTodoList(state, data){
            let todo = state.todosData.find(todo => todo.id === data.id)
            Object.assign(todo, data);
        },

        addTodo(state, payload){
            state.todosData.unshift(payload)
        },

        changeDay(state, num){
            let date = state.userDate.split(".")
            let day = date[0]
            console.log(num);
            day = +day + num
            date[0] = day
            state.userDate = date.join(".")
        }

    },

    actions : {

       async fetchUserTodos(context, date){
           let { data } = await axios.get("api/todos/todo-list", { params : { date : date }})
           context.commit("setUserTodos", data)
       },

       async changeTodoStatus(context, todo){
           let { data } = await axios.put(`api/todos/todo/${todo.id}/`, todo)
           context.commit("updateTodoList", data)
       },

       async addTodoInBase(context, todo){
           let { data } = await axios.post("api/todos/todo-list/", todo)
           context.commit("addTodo", data)
       }

    //    addTodoInBase(context, todo){
    //        return new Proxy((resolve, reject) => {
    //            axios.post("api/todos/todo-list/", todo)
    //            .then(
    //                response => {
    //                    console.log(response);
    //                    resolve()
    //                })
    //             .catch(error => {
    //                 console.log(error);
    //                 reject()
    //             })
    //        })
    //    }

    },

    getters : {
        getUserTodos : state => state.todosData,
        getUserDate : state => state.userDate
    }

}