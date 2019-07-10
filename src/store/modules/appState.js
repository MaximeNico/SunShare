const state = {
  appOnUse: false
}

const getters = {
  appOnUse: state => state.appOnUse
}

const mutations = {
  onUse: function (state) {
    state.appOnUse = !state.appOnUse
  }
}

export default {
  state,
  mutations,
  getters
}
