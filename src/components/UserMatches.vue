<template>
  <div class="matches-viewer">
    <div
      class="match-container"
      v-for="(match, index) in matches"
      :key="index"
      @click="handleMatchClick(match, index)"
    >
      <img class="match-picture" :src="match.image" alt="Cat image" />
      <span class="match-age">{{ match.age }}</span>
      <span class="match-name">{{ match.name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserMatches',
  components: {},
  methods: {
    handleMatchClick(match, index) {
      this.$router.push({ name: 'match', params: { idx: index } });
    },
  },
  computed: {
    matches() {
      return this.$store.state.matches;
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.matches-viewer {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  height: 720px;
  width: 480px;
  overflow: hidden;
  overflow-y: auto;
}
.match-container {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  padding-left: 8rem;
  gap: 1rem;
  cursor: pointer;
}
.match-container:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}
.match-container:hover {
  background-color: white;
  color: gray;
}
.match-container .match-picture {
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
.match-container .match-name,
.match-container .match-age {
  font-size: 18px;
  font-weight: bold;
}
</style>
