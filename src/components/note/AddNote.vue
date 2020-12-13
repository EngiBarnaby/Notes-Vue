<template>
    <div>
        <h2
            class="text-center"
            >Добавить заметку для категорий {{ category.title }}</h2>
        <v-row justify="center">
            <v-col xs='12' sm="12" md="12" lg="8" xl="8" cols="12">
                <v-text-field
                    v-model="title"
                    outlined
                    label="Заголовок"
                ></v-text-field>
            </v-col>
            <v-col xs='12' sm="12" md="12" lg="8" xl="8" cols="12">
                <v-text-field
                    v-model="description"
                    outlined
                    label="Дополнительная информация"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col xs='12' sm="12" md="12" lg="8" xl="8" cols="12">
                <editor
                    v-model="content"
                    :init="{
                        height: 500,
                        menubar: false,
                        plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code codesample help wordcount'
                        ],
                        codesample_languages: [
                            {text: 'HTML/XML', value: 'markup'},
                            {text: 'JavaScript', value: 'javascript'},
                            {text: 'CSS', value: 'css'},
                            {text: 'PHP', value: 'php'},
                            {text: 'Ruby', value: 'ruby'},
                            {text: 'Python', value: 'python'},
                            {text: 'Java', value: 'java'},
                            {text: 'C', value: 'c'},
                            {text: 'C#', value: 'csharp'},
                            {text: 'C++', value: 'cpp'}
                        ],
                        toolbar:
                        'undo redo | formatselect | bold italic backcolor forecolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | codesample | removeformat help'
                    }"
                />
            </v-col>
        </v-row> 
        <v-row justify="center">
            <v-col
                xs='8' sm="8" md="8" lg="6" xl="6" cols="8"
            >
                <v-btn 
                outlined
                x-large
                block
                @click="submitNote"
                >
                    Добавить
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { mapActions, mapGetters } from "vuex"

export default {
    
    components : {
        'editor': Editor
    },

    data(){
        return {
            title : '',
            description : '',
            content : '',
            category : '',
        }
    },

    methods : {

        ...mapActions(["addNoteInBase"]),
        ...mapGetters(["getCurrentCat"]),

        submitNote(){
            this.addNoteInBase({
                                "category" : this.category.id,
                                "title" : this.title, 
                                "description" : this.description,
                                "content" : this.content })
            this.$router.push("notes")
        }

    },

    mounted(){
        this.category = this.getCurrentCat()
    }

}
</script>