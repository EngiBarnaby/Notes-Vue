import axiosInst from '@/axios/customAxios'

const axios = axiosInst

export default {

    state : {
        profileData : {},
        userStats : {}
    },

    mutations : {

        setProfileData(state, data){
            state.profileData = data
        },

        setUserStats(state, data){
            state.userStats = data
        },

    },

    actions : {

       async fetchUserProfileData(context){
            let { data } = await axios.get("account/profile/")
            context.commit("setProfileData", data)
        },


        async fetchUserStats(context){
            let { data } = await axios.get("account/user-stats/")
            context.commit("setUserStats", data)
        }

    },

    getters : {

        getProfileData : state => state.profileData,
        getUserStats : state => state.userStats

    }

}