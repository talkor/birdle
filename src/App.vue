<script setup>
import TheGame from "./components/TheGame.vue";
</script>

<template>
  <header>
    <h1>BIRDLE</h1>
  </header>

  <main>
    <TheGame />
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

h1 {
  text-align: center;
  color: #ffffff;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 20px;
}
</style>
