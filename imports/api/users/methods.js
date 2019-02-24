import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
    'users.create'() {
        Accounts.createUser({
            username: 'kleber',
            email: 'kleber.machado@ufvjm.edu.br',
            password: 'asdf'
        })
    }
})