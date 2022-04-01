<script setup>
import TheGame from "./components/TheGame.vue";
</script>

<template>
  <header>
    <h1>BIRDLE</h1>
    <a href="https://github.com/talkor/birdle"
      ><img :class="$style.githubLink" src="./assets/github.png" alt="github"
    /></a>
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
  padding: 1rem;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  height: 100vh;
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

* {
  touch-action: manipulation;
}
</style>

<style module>
.githubLink {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 30px;
}

.githubLink:hover {
  opacity: 0.7;
}
</style>
