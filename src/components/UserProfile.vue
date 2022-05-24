<template>
  <div class="cat-viewer" v-bind:style="{ backgroundImage: `url(${image})` }">
    <div class="body">
      <h1>{{ name }} {{ age }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserProfile',
  components: {},
  data() {
    return {
      name: 'Copito',
      age: '18',
      description:
        'Busca gatita para que me acompañe a comer Whiskas a la luz de la luna. Me gusta jugar con ratones de plástico y plumas.',
      image: 'https://i1.sndcdn.com/artworks-000013749515-eiq27h-t500x500.jpg',
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
