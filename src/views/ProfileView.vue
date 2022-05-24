<template>
  <div class="profile-view">
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';

export default {
  name: 'ProfileView',
  components: { UserProfile },
};
</script>

<style scoped>
.profile-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
