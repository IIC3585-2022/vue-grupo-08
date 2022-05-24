<template>
  <div class="profile-view">
    <UserProfile :user=user />
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';

export default {
  name: 'ProfileView',
  components: { UserProfile },
  data() {
    return {
      user: {
        name: 'Copito',
        age: '18',
        description: 'Busca gatita para que me acompañe a comer Whiskas a la luz de la luna. Me gusta jugar con ratones de plástico y plumas.',
        image: 'https://i1.sndcdn.com/artworks-000013749515-eiq27h-t500x500.jpg',
      }
    }
  },
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
