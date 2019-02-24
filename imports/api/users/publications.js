import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

Meteor.publish('users.all', function() {
    return Meteor.users.find({})
})

Meteor.publish('users.show', function() {
    const user =  Accounts.findUserByUsername('kleber')
    return Meteor.users.find({ _id: user._id })
})