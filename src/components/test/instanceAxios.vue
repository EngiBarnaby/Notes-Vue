<template>
    <div>
        <div>
            <v-btn
                mr-2
                @click="testFetch"
                color="success">
                Проверить HTTP Запрос
            </v-btn>
        </div>
        <div>
            <v-btn 
                @click="SecondTestFetch"
                color="success">
                Проверить Юзера
            </v-btn>
            <v-btn 
                @click="ChangeHref"
                color="success">
                Проверка window.location
            </v-btn>
            <v-btn 
                @click="GetToken"
                color="success">
                Токен
            </v-btn>
            <v-btn 
                @click="GetCategory"
                color="success">
                Проверка получения категорий из локала
            </v-btn>
            <v-btn 
                @click="GetCurrentUser"
                color="success">
                Текущий юзер
            </v-btn>
        </div>
    </div>
</template>

<script>
import axiosInst from '@/axios/customAxios'
export default {
    
    methods : {

        testFetch(){
            const axios = axiosInst
            axios.post("api/token/", { username : "Engi3", password : "33883102" })
            .then(
                resp => {
                    console.log(resp);
                    
                }
            )
            .catch( error => {
                console.log(error);
            })
        },

        SecondTestFetch(){
            const axios = axiosInst

            axios.get("account/test/")
            .then( response => {
                console.log(response);
            })
            .catch( error => {
                console.log(error);
            })
        },

        ChangeHref(){
            window.location.href = '/login/'
        },

        GetToken(){
            console.log(localStorage.getItem("token"));
        },

        GetCategory(){
            console.log(localStorage.getItem("currentCategory"));
        },

        GetCurrentUser(){
            console.log(localStorage.getItem("username"));
        }

    }

}
</script>