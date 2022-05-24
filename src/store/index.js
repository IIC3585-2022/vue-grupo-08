import { createStore } from 'vuex'

export default createStore({
 state () {
    return {
      likes: [],
      matches: [],
    }
  },
  getters: {
  },
  mutations: {
    like(state, cat) {
      state.likes.push(cat);
      console.log("like added to store:", cat.name);
    },
    match(state, cat) {
      state.matches.push(cat);
      console.log("match added to store:", cat.name);
    },
  },
  actions: {
  },
  modules: {
  }
})
