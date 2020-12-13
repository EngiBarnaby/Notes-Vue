<template>
    <div class="login-user mt-6 ">
        <v-row justify="center" align="start"> 
            <v-col xs="12" sm="12" md="5">
                <v-card class="px-10" >
                    <v-card-text>
                        <h2 class="text-center py-3">Регистрация</h2>
                    </v-card-text>
                    <v-form>
                        <v-text-field
                            label="Username"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Email"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Password"
                        >
                        </v-text-field>
                    </v-form>
                    <v-card-actions >
                        <v-row justify="center" >
                            <v-btn 
                                large
                                color="primary"
                            >
                            Зарегистрироваться
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    
}
</script>