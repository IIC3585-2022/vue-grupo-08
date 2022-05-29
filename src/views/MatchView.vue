<template>
  <div class="match-view">
    <UserProfile :user="user" @click="handleClick"/>
    <Chat :userIdx="userIdx"/>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import Chat from '@/components/Chat.vue';

export default {
  name: 'MatchView',
  components: { UserProfile, Chat },
  computed: {
    user() {
      return this.$store.state.matches[this.$route.params.idx];
    },
    userIdx() {
      return this.$route.params.idx;
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
/deep/ .cat-viewer {
  max-height: 500px;
}

.match-view {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
