// import axios from '@/axios'
import axiosInst from '@/axios/customAxios'

const axios = axiosInst

// const baseUrl = "http://127.0.0.1:8000/"

export default {

    state: {
        notesData : {},
        currentNote : {},
        categoriesData : {},
        currentCat : '',
    },

    mutations: {

        setNotesData(state, data){
            state.notesData = data
        },

        setNoteData(state, data){
            state.currentNote = data
        },

        setCategories(state, data){
            state.categoriesData = data
        },

        setCurrentCat(state, data){
            state.currentCat = data
        },

        addCategory(state, data){
            state.categoriesData.unshift(data)
        },

        addNote(state, data){
            state.notesData.push(data)
        }


    },

    actions: {

       async fetchAllNotes(context){
           let { data } = await axios.get("api/notes/all-notes/")
           context.commit("setNotesData", data)
       },

       async fetchNotesCategories(context){
           let { data } = await axios.get("api/notes/category/")
           context.commit("setCategories", data)
       },

       async fetchNotesSortedByCatgory(context, pk){
        let { data } = await axios.get(`api/notes/category/${pk}`)
        context.commit("setNotesData", data)
        },

        async fetchNoteDetail(context, pk){
            let { data } = await axios.get(`api/notes/note/${pk}`)
            context.commit("setNoteData", data)
            },

        async addCategoryInBase(context, payload){
            let { data } = await axios.post("api/notes/category/", payload)
            context.commit("addCategory", data)
        },

        async addNoteInBase(contex, payload){
            let { data } = await axios.post("api/notes/note-list/", payload)
            contex.commit("addNote", data)
        }

    },

    getters : {
        getNotes : state => state.notesData,
        getCurrentCat : state => state.currentCat,
        getCategories : state => state.categoriesData,
        getCurrentNote : state => state.currentNote
    }

}

