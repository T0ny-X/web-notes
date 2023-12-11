<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="nav">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/css">CSS</RouterLink></li>
        <li><RouterLink to="/html">HTML</RouterLink></li>
        <li><RouterLink to="/js">JS</RouterLink></li>
        <li><RouterLink to="/msg">API</RouterLink></li>
        <li><RouterLink to="/data">Database</RouterLink></li>
      </ul>
    </nav>
  </header>
  <RouterView />
  <footer>© 2023. Tony X. Open Source. MIT Licence.</footer>
</template>

<script>
export default {
  components: {}
}
</script>
