<template>
  <nav class="navbar">
    <router-link to="/profile" class="profile-button">
      <span class="nav-button"> My Profile </span>
    </router-link>
    <router-link to="/" class="main-title">
      <img src="@/assets/icons8-tinder-48.png" alt="logo" />
      <h1>catinder</h1>
    </router-link>
    <router-link to="/matches" class="profile-button">
      <span class="nav-button"> My Matches </span>
    </router-link>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>
<style scoped>
.navbar {
  background-image: linear-gradient(45deg, #fd267a, #ff6036);
  height: 64px;
  position: fixed;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile-button {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0 1rem;
}
.main-title {
  margin: auto;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-size: 24px;
}
</style>
