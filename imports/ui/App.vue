<template>
    <k-structure>
        <v-btn color='success' @click="create()">Cadastrar Usuário</v-btn>
        <v-btn color='success' @click="show()">Show user</v-btn>
    </k-structure>
</template>
<script>
import { Meteor } from 'meteor/meteor'
import kStructure from './layouts/Structure.vue'

export default {
    components: {
        kStructure,
    },
    methods: {
        create() {
            const user = Meteor.call('users.create')
            console.log('user :', user);
        },
        show() {
            const users = Meteor.users.findOne({})
            console.log('user :', users);
        }
    },
    meteor: {
        $subscribe: {
            'users.show': []
        }
    },
}
</script>