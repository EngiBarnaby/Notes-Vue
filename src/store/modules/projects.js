import axiosInst from '@/axios/customAxios'

const axios = axiosInst

export default {
    namespaced : true,
    state : {
        projects : {},
    },

    mutations : {

        setUserProjects(state, data){
            state.projects = data
        },

    },

    actions : {

        async fetchProjects(context){
            let { data } = await axios.get("api/projects/second-test/")
            context.commit("setUserProjects", data)
        },

    },

    getters : {

        getProjects : state => state.projects,

    },

}