<template>
  <div class="match-view">
    <UserProfile :user=user />
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
    }
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
