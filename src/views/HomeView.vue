<template>
  <div class="home-view">
    <CatViewer />
  </div>
</template>

<script>
import CatViewer from '@/components/CatViewer.vue';

export default {
  name: 'HomeView',
  components: { CatViewer },
};
</script>

<style scoped>
.home-view {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
