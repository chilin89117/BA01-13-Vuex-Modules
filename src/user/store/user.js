export default {
  namespaced: true,
  state: {isLoggedIn: false},
  getters: {
    isLoggedIn(state, getters, rootState, rootGetters) {
      return state.isLoggedIn;
    }
  },
  actions: {
    login({state, commit, rootState, rootGetters}) {
      // Commit root mutation
      // if(!rootGetters.isBanned) commit('login', null, {root: true});
      // Commit module mutation
      if(!rootGetters.isBanned) commit('login');
      else alert("You've been banned!!!");
    },
    logout({state, commit, rootState, rootGetters}) {
      commit('logout');
    },
  },
  // Mutations can not access rootState
  mutations: {
    login(state) {
      console.log('Module login mutation');
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
};