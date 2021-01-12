import Vue from 'vue'
import Vuex from 'vuex'
import about from './about.js'
import about2 from './about2.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    about,
    about2,
  }
})
