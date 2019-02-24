import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker'
import App from '../../ui/App.vue'
import Vuetify from 'vuetify'

Vue.use(VueMeteorTracker)    
Vue.use(Vuetify)

Meteor.startup(() => {

    new Vue({
        el: "#app",
        ...App
    })
})