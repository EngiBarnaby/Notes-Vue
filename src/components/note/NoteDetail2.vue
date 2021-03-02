<template>
        <v-container>
            <editor
                    v-model="getCurrentNote.content"
                    :init="{
                        height: 480,
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
                        bullist numlist outdent indent | codesample link | removeformat help'
                    }"
                />
        </v-container>
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
            noteData : {}
        }
    },

    computed : {
        ...mapGetters(["getCurrentNote"])
    },

    methods : {
        ...mapActions(["fetchNoteDetail"])
    },

    async mounted(){
        await this.fetchNoteDetail(this.$route.params.NoteId)
    }

}
</script>

<style scoped>

.detail {
    position: fixed;
    /* max-height: calc(100vh - 64px); */
    height:500px;
    overflow-y: auto;
    width: calc(65% - 5px);
}

</style>