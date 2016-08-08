import Vue from 'vue'
export const getApi = ({ dispatch, state }) => {
  Vue.http.get('http://api.fixer.io/latest').then(function (res) {
    console.log(res.data)
    dispatch('sendApitoStore', res.data)
  })
}
export const add = ({ dispatch, state }, num) => {
  dispatch('sendNumToStore', num)
}
