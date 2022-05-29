<template>
  <Navbar />
  <router-view class="main-view" />
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  background-color: #f0f2f4;
  box-sizing: border-width;
  overflow: auto;
}
.main-view {
  padding-top: 70px;
}
</style>
