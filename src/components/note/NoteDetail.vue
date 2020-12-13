<template>
    <v-expansion-panel
                        class="my-2 py-2"
                        elevation="4"
                        outlined
                    >
        <v-expansion-panel-header>
            {{ note.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            {{ note.description }}
            <div v-html="note.content">
            </div>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>

export default {
    
    props : ["note"],


}
</script>