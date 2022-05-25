<template>
  <div class="match-view" @click="handleClick">
    <UserProfile :user="user" />
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';

export default {
  name: 'MatchView',
  components: { UserProfile },
  computed: {
    user() {
      return this.$store.state.matches[this.$route.params.idx];
    },
  },
  methods: {
    handleClick() {
      this.$router.replace('/matches');
    },
  },
};
</script>

<style scoped>
.match-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
