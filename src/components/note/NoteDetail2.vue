<template>
        <div v-html="getCurrentNote.content"
            class="detail"
            >
        </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
    
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
    max-height: calc(100vh - 64px);
    height:auto;
    overflow-y: auto;
    width: calc(65% - 5px);
}

</style>