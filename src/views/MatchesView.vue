<template>
  <div class="matches-view">
    <UserMatches />
  </div>
</template>

<script>
import UserMatches from '@/components/UserMatches.vue';

export default {
  name: 'MatchesView',
  components: { UserMatches },
};
</script>

<style scoped>
.matches-view {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
