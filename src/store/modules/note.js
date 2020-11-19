import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000/"

export default {

    state: {
        notesData : {},
        categoriesData : {},
        currentCat : '',
    },

    mutations: {

        setNotesData(state, data){
            state.notesData = data
        },

        setCategories(state, data){
            state.categoriesData = data
        },


    },

    actions: {

       async fetchAllNotes(context){
           let { data } = await axios.get(baseUrl + "api/notes/all-notes/")
           context.commit("setNotesData", data)
       },

       async fetchNotesCategories(context){
           let { data } = await axios.get(baseUrl + "api/notes/all-categories/")
           context.commit("setCategories", data)
       },

       async fetchNotesSortedByCatgory(context, title="all"){
        let { data } = await axios.get(baseUrl + `api/notes/category/${title}`)
        context.commit("setNotesData", data)
    }

    },

    getters : {
        getNotes : state => state.notesData,
        getCategories : state => state.categoriesData,
    }

}

