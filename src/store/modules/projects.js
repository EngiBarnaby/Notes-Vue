import axiosInst from '@/axios/customAxios'

const axios = axiosInst

export default {
    namespaced : true,
    state : {
        projects : {},
        projectDetail : {},
        currentProject : {},
    },

    mutations : {

        setUserProjects(state, data){
            state.projects = data
        },

        setProjectDetail(state, data){
            state.projectDetail = data
        },

        setCurrentProject(state, data){
            state.currentProject = data
        },

        updateStepsList(state, data){
            let steps = state.projectDetail.find(steps => steps.id === data.id)
            Object.assign(steps, data);
        },

        addStep(state, payload){
            state.projectDetail.unshift(payload)
        },

    },

    actions : {

        async fetchProjects(context){
            let { data } = await axios.get("api/projects/projects/")
            context.commit("setUserProjects", data)
        },

        async fetchProjectDetail(context, id){
            let { data } = await axios.get(`api/projects/project/${id}`)
            context.commit("setProjectDetail", data)
        },

        async addStepInProject(context, step){
            let { data } = await axios.post(`api/projects/project/`, step)
            context.commit("addStep", data)
        },


        async changeStepStatus(context, step){
            let { data } = await axios.put(`api/projects/step/${step.id}/`, step)
            context.commit("updateStepsList", data)
        }

    },

    getters : {

        getProjects : state => state.projects,
        getProjectDetail : state => state.projectDetail,
        getCurrentProject : state => state.currentProject,

    },

}