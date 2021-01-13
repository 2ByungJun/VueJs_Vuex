import Vue from 'vue'
import Vuex from 'vuex'
import stateMutation from '@/store/modules/stateMutation.js'
import actionMutation from '@/store/modules/actionMutation.js'
import comment from '@/store/modules/comment.js'
import mapHelper from '@/store/modules/mapHelper.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stateMutation,
    actionMutation,
    comment,
    mapHelper,
  }
})
