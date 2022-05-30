<template>
  <div class="message-container" id="message-container">
    <div class="message" v-for="(msg, idx) in messages" :key="idx">{{msg}}</div>
    <input type="text" placeholder="Mensaje" @keydown.enter="handleSend">
  </div>
</template>
<script>
import { onUpdated, onMounted } from 'vue'

export default {
  name: 'Chat',
  props: ['userIdx'],
  components: {},
  data() {
    return {
    };
  },
  setup() {
    onUpdated(() => {
      const element = document.getElementById("message-container");
      element.scrollTop = element.scrollHeight;
    });
    onMounted(() => {
      const element = document.getElementById("message-container");
      element.scrollTop = element.scrollHeight;
    });
  },
  computed: {
    messages() {
      return this.$store.state.matches[this.userIdx].chat
    }
  },
  methods: {
    handleSend(event) {
      if (event.target.value !== ""){
        this.$store.commit('message', { idx: this.userIdx, msg: event.target.value});
        event.target.value = "";
      }
    },
  },
};

</script>
<style scoped>
.message-container {
  display: flex;
  margin-top: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  height: fit-content;
  max-height: 500px;
  width: 480px;
  overflow: hidden;
  overflow-y: auto;
  flex-direction: column;
}
.message {
  padding: 0.5rem;
}
.message:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}
.message:hover {
  background-color: white;
  color: gray;
}
input {
  padding: 0.5rem;
  border: none;
  background-color: #ff7056;
  outline: none;
}
</style>
