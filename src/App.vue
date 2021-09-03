<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import './assets/all';
</style>
