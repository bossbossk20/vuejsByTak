import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  data: {},
  num: 0
}
const mutations = {
  sendApitoStore (state, data) {
    state.data = data
    console.log(state.data)
  },
  sendNumToStore (state, num) {
    state.num += num
  }
}
export default new Vuex.Store({
  state,
  mutations
})
