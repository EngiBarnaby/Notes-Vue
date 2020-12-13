<template>
    <div>
        <v-row justify="center">
            <editor
                v-model="tinyData"
                api-key="no-api-key"
                :init="{
                    height: 500,
                    menubar: false,
                    plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help'
                }"
            />
        </v-row> 
        <v-row justify="center">
            <h3>{{ tinyData }}</h3>
        </v-row>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
    
    name: 'app',

    components: {
        'editor': Editor
    },

    data(){
        return {
            tinyData : ''
        }
    }
}
</script>