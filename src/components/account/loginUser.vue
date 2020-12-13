<template>
    <div class="login-user">
        <v-row justify="center" align="start"> 
            <v-col xs="12" sm="12" md="5">
                <v-card class="px-10" >
                    <v-card-text>
                        <h2 class="text-center py-3">Войти в аккаунт</h2>
                    </v-card-text>
                    <v-form>
                        <v-text-field
                            label="Username"
                            v-model="username"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Password"
                            v-model="password"
                        >
                        </v-text-field>
                    </v-form>
                    <v-card-actions >
                        <v-row justify="center" >
                            <v-btn 
                                large
                                color="primary"
                                @click="login"
                            >
                                Войти
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                    <v-card-text>
                        <h4 class="text-center" >
                            <router-link :to="{ name : 'register' }">Зарегистрируйтесь</router-link>
                            ,если у вас нет аккунта
                        </h4>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    
    data(){
        return {
            username : "",
            password : ""
        }
    },

    methods : {
        ...mapActions(["loginUser"]),
        login(){
            let username = this.username
            let password = this.password
            this.loginUser({username, password})
                .then(() => this.$router.push("/"))
                .catch(error => console.log(error))
        }
    }

}
</script>