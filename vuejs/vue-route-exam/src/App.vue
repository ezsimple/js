<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="route-link">
      <router-link to="/">Go to 첫화면</router-link>
      <router-link to="/1">Go to 1</router-link>
      <router-link to="/2/월드닷!">Go to 2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
