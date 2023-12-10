<script setup>

</script>

<template>
  <section>
    <h1 id="welcomeMessage">
      Hello!
    </h1>
    <form id="greetForm">
      <label for="name">Enter another name for a new greeting:</label>
      <br>
      <input type="text" id="name">
      <input type="submit" value="Submit">
    </form>
  </section>
  <section>
    <h1>
      Guess the rules
    </h1>
    <form id="beginGame">
      <label>Choose one of two ways to enter numbers:</label>
      <br>
      <input type="button" value="Enter numbers one by one" onclick="gameByNumber()">
      <input type="button" value="Enter number by a list" onclick="gameByList()">
    </form>
    <h3 id="gameResult">Base on the result, can you guess what happened?</h3>
  </section>
  <script src="../assets/main.js"></script>
</template>

<style scoped>

</style>