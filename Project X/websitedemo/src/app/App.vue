<template>
  <div id="app">
    <NavBar />
    <section id="content">
      <router-view></router-view>
    </section>
    <footer id="footer">
      <b-container>
        <div class="solid-line mb4x"></div>
        <div>© 2020 Decentralized Charity</div>
      </b-container>
    </footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s - Decentralized Charity!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>

#app {
  font-family: Lato,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

.solid-line {
  background: 0;
  border-bottom: 1px solid #ddd;
}

.mb2x {
  margin-bottom: 2rem!important;
}

.mb4x {
  margin-bottom: 4rem!important;
}

.title {
  color: #333;
  font-weight: 900;
  font-size: 2.5rem;
  text-align: center;
}

</style>
