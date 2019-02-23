import Vue from 'vue'
import App from '../../ui/App.vue'
import Vuetify from 'vuetify'

// Meteor.startup(() => {
Vue.use(Vuetify)

    new Vue({
        el: "#app",
        ...App
    })
// })