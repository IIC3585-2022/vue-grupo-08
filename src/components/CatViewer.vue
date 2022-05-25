<template>
  <div
    class="cat-viewer"
    v-bind:style="{ backgroundImage: `url(${currCatURL})` }"
  >
    <div class="match-overlay" v-show="showOverlay">It's a Match!</div>
    <div class="body">
      <h1>{{ currCatName }} {{ currCatAge }}</h1>
      <p>{{ currCatDescription }}</p>
      <div class="buttons">
        <button class="dislike" @click="handleDislike">
          <img src="@/assets/icons8-eliminar-48.png" alt="Dislike" />
        </button>
        <button class="like" @click="handleLike">
          <img src="@/assets/icons8-me-gusta-48.png" alt="Like" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { faker } from '@faker-js/faker';

const CAT_API_URL = 'https://api.thecatapi.com/v1';

export default {
  name: 'CatViewer',
  components: {},
  data() {
    return {
      showOverlay: false,
      currCatName: '',
      currCatAge: '',
      currCatDescription: '',
      currCatURL: '',
    };
  },
  mounted() {
    this.replaceCurrCat();
  },
  methods: {
    async getCatImgURL() {
      // Generates a random cat image from API
      const response = await fetch(`${CAT_API_URL}/images/search`);
      const json = await response.json();
      return json[0].url;
    },
    async replaceCurrCat() {
      this.currCatName = faker.name.firstName();
      this.currCatAge = faker.datatype.number({ min: 18, max: 32 });
      // TODO: change this lorem to some description
      this.currCatDescription = faker.lorem.paragraph();
      this.currCatURL = await this.getCatImgURL();
    },
    handleLike() {
      const likedCat = {
        name: this.currCatName,
        age: this.currCatAge,
        description: this.currCatDescription,
        image: this.currCatURL,
      };

      this.$store.commit('like', likedCat);

      if (Math.random() > 0.5) {
        this.showOverlay = true;
        this.hideOverlay();
        this.$store.commit('match', likedCat);
      }
      this.replaceCurrCat();
    },
    handleDislike() {
      this.replaceCurrCat();
    },
    hideOverlay() {
      setTimeout(() => (this.showOverlay = false), 600);
    },
  },
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
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin: 2rem 0;
}
button {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: none;
  outline: none;
  cursor: pointer;
  transition: all ease 0.2s;
}
button.like {
  border: 8px solid #2ecc71;
}
button.dislike {
  border: 8px solid #e74c3c;
}
button:hover {
  transform: scale(1.1);
}
.match-overlay {
  background-color: rgba(0, 0, 0, 0.25);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  font-weight: bolder;
  color: #2ecc71;
  text-shadow: 2px 2px 8px black;
}
</style>
