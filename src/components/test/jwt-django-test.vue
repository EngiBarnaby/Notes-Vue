<template>
    <div>
        <h2 class="text-center" >Some data</h2>
        <h2 class="text-center" >{{ getUserPersonalData }}</h2>
        <h2 class="text-center" >Some data</h2>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
    
    computed : {
        ...mapGetters(["getUserPersonalData"])
    },

    methods : {
        ...mapActions(["fetchPersonalData"])
    },

    async mounted(){
        await this.fetchPersonalData()
    }

}
</script>