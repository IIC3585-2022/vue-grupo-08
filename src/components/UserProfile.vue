<template>
  <div class="cat-viewer" v-bind:style="{ backgroundImage: `url(${user.image})` }">
    <div class="body">
      <h1>{{ user.name }} {{ user.age }}</h1>
      <p>{{ user.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserProfile',
  props: ['user'],
  components: {},
  data() {
    return {
    };
  },
  methods: {},
};
</script>
<style scoped>
.cat-viewer {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  height: 720px;
  width: 480px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.body {
  color: white;
  text-shadow: 2px 2px 8px black;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(to bottom, transparent, black);
}
</style>
