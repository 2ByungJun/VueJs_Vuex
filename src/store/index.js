import Vue from 'vue'
import Vuex from 'vuex'
import reative from '@/store/modules/reative.js'
import actionMutation from '@/store/modules/actionMutation.js'
import comment from '@/store/modules/comment.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    reative,
    actionMutation,
    comment,
  }
})
