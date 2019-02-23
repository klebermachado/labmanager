<template>
    <v-app>
        <k-toolbar></k-toolbar>
        <v-content>
            <v-container fill-height>
                <v-layout justify-center align-center>
                    <slot></slot>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
import kToolbar from "./Toolbar.vue";

export default {
    components: {
        kToolbar
    }
};
</script>