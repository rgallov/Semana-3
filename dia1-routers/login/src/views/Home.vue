<template>
  <div class="home">
    <div id="nav" class="d-flex justify-content-center">
      <router-link to="/Home">Home</router-link><span class="px-2">|</span>
      <router-link to="/about">About</router-link><span class="px-2">|</span>
      <router-link to="/">LogOut</router-link>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TheHome></TheHome>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TheHome from '@/components/TheHome.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    TheHome
  }
}
</script>
