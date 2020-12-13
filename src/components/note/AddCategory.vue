<template>
    <div>
        <v-row justify="center" align="center">
            <v-col xs='10' sm="10" md="6" lg="6" xl="6" cols="10">
                <ValidationObserver v-slot="{ handleSubmit }">
                    <form @submit.prevent="handleSubmit(onSubmit)">
                        <ValidationProvider rules="required" v-slot="{ errors }">
                            <v-text-field
                                name="name"
                                label="Добавить категорию"
                                id="id"
                                outlined
                                v-model="categoryTitle"
                                :error-messages="errors"
                            >
                                <template v-slot:append-outer>
                                    <v-btn
                                        type="submit"
                                        outlined
                                        medium
                                        fab
                                        style="top: -16px"
                                        >
                                        <v-icon x-large >mdi-plus</v-icon>
                                    </v-btn>
                                </template>
                            </v-text-field>
                        </ValidationProvider>
                    </form>
                </ValidationObserver>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';

extend('required', {
  validate (value) {
      return{
        required: true,
        valid: ['', null, undefined].indexOf(value) === -1
      }
  },
  message: 'Поле не должно быть пустым',
  computesRequired: true
});


export default {

    components : {
        ValidationProvider,
        ValidationObserver,
    },
    
    data(){
        return {
            categoryTitle : "",
        }
    },

    methods: {
        onSubmit () {
            this.$store.dispatch("addCategoryInBase", 
                {"title" : this.categoryTitle}
            )
        }
  }

}
</script>