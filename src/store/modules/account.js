// import axios from "@/axios"

import axiosInst from '@/axios/customAxios'

const axios = axiosInst

export default {

    state : {
        username : localStorage.getItem("username") || null,
        isLogin : localStorage.getItem("token") ? true : false,
        userPersonalData : {},
        token : localStorage.getItem('token') || '',
    },

    mutations : {

        setLoginStatus(state, username){
            state.isLogin = true
            state.username = username
        },

        logout(state){
            state.isLogin = false
            state.username = null
        },

        setUserPersonalData(state, data){
            state.userPersonalData = data
        },

        refreshedToken(state, token){
            state.token = token
        },
    },


    actions : {

        loginUser(context, user){
            return new Promise(( resole, reject ) => {
                axios({ url : "api/token/", data : user, method : "POST" })
                .then( response => {
                    const accessToken = response.data.access
                    const refreshToken = response.data.refresh
                    localStorage.setItem("token", accessToken)
                    localStorage.setItem("refresh_token", refreshToken)
                    localStorage.setItem("username", user.username)
                    axios.defaults.headers["Authorization"] = `Bearer ${accessToken}`
                    context.commit("setLoginStatus", user.username)
                    resole(response)
                })
                .catch( error => {
                    localStorage.removeItem("token")
                    reject(error)
                })
            })
        },

        logoutUser({ commit }){
            return new Promise( (resolve) => {
                commit("logout")
                localStorage.removeItem("token")
                localStorage.removeItem("refresh_token")
                localStorage.removeItem("username")
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },

        fetchPersonalData({ commit }){
            return new Promise( (resolve, reject) => {
                axios({ url : "account/test/", method : "GET"})
                .then( response => {
                    commit("setUserPersonalData", response.data)
                    resolve()    
                })
                .catch( error => {
                    console.log(error)
                    reject(error)
                })
            })
        },

        REFRESH_TOKEN: ({commit}) => {
            return new Promise((resolve, reject) => {
              const refreshToken = localStorage.getItem('refresh_token')
              axios
                .post('api/token/refresh/', {"refresh" : refreshToken})
                .then(response => {
                    const token = response.data.access
                    localStorage.setItem('token', token)
                    axios.defaults.headers['Authorization'] = `Bearer ${token}`
                    commit('refreshedToken', token)
                    console.log("Token have been refreshed");
                    resolve(token)
                })
                .catch(error => {
                    console.log(error);
                  reject(error)
                });
            });
          },

    },

    getters : {
        getUsername : state => state.username,
        getUserStatus : state => state.isLogin,
        getUserPersonalData : state => state.userPersonalData
    }

}