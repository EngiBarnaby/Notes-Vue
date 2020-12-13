import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// import axios from "@/axios"

Vue.config.productionTip = false

// const token = localStorage.getItem('token')

// if (token) {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
// }

// let isAlreadyFetchingAccessToken = false
// let subscribers = []

// function onAccessTokenFetched(access_token) {
//   subscribers = subscribers.filter(callback => callback(access_token))
// }

// function addSubscriber(callback) {
//   subscribers.push(callback)
// }

// axios.interceptors.response.use(
  
// function (response) {
//   return response
// }, 

// function (error) {
//   const { config, response: { status } } = error
//   const originalRequest = config

//   if (status === 401 || status == 403) {
//     if (!isAlreadyFetchingAccessToken) {
//       isAlreadyFetchingAccessToken = true

//       console.log("111111111");
//       store.dispatch("REFRESH_TOKEN")
//       .then((access_token) => {
//         isAlreadyFetchingAccessToken = false
//         onAccessTokenFetched(access_token)
//       })
//     }

//     const retryOriginalRequest = new Promise((resolve) => {
//       addSubscriber(access_token => {
//         originalRequest.headers.Authorization = 'Bearer ' + access_token
//         resolve(axios(originalRequest))
//       })
//     })
//     return retryOriginalRequest
//   }
//   return Promise.reject(error)
// })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
