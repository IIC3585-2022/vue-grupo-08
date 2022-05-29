import { createStore } from 'vuex'

export default createStore({
 state () {
    return {
      likes: [],
      matches: [],
    }
  },
  mutations: {
    like(state, cat) {
      state.likes.push(cat);
      console.log("like added to store:", cat.name);
    },
    match(state, cat) {
      cat.chat = []
      state.matches.push(cat);
      console.log("match added to store:", cat.name);
    },
    message(state, {idx, msg}) {
      state.matches[idx].chat.push(msg);
      console.log("message added to store:", idx, msg);
    },
  },
})
