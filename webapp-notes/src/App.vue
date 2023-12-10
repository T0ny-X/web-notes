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
        <li><RouterLink to="/game">Game</RouterLink></li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<script></script>
