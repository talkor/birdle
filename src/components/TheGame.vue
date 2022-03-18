<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import GuessRow from "./GuessRow.vue";

const WORD = "BIRD";
const NUM_GUESSES = 6;
const WORD_LENGTH = 4;

const currentGuess = ref(0);
const currentLetter = ref(0);
const isGameOn = ref(true);

const guesses = ref([
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
]);

onMounted(() => {
  window.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isGameOn.value) {
      return;
    }

    if (key.length === 1 && key.match(/[a-z]/i)) {
      onLetterClick(key);
    }

    if (key === "Backspace") {
      onLetterDelete();
    }

    if (key === "Enter") {
      onSubmitGuess();
    }
  });

  const onLetterClick = (letter) => {
    if (currentLetter.value < WORD_LENGTH) {
      guesses.value[currentGuess.value][currentLetter.value] =
        letter.toUpperCase();
      currentLetter.value++;
    }
  };

  const onLetterDelete = () => {
    if (currentLetter.value > 0) {
      guesses.value[currentGuess.value][currentLetter.value - 1] = "";
      currentLetter.value--;
    }
  };

  const onSubmitGuess = () => {
    if (currentLetter.value !== WORD_LENGTH) {
      return;
    }

    if (guesses.value[currentGuess.value].join("") === WORD) {
      currentGuess.value++;
      isGameOn.value = false;
      console.log("Game Over, you won!");
      return;
    }

    currentGuess.value++;

    if (currentGuess.value < NUM_GUESSES) {
      currentLetter.value = 0;
    }

    if (currentGuess.value === NUM_GUESSES) {
      isGameOn.value = false;
      console.log("Game Over, you lost");
    }
  };
});

onUnmounted(() => {
  window.removeEventListener("keypress", () => {});
});
</script>

<template>
  <div :class="$style.game">
    <GuessRow
      v-for="(guess, key) in guesses"
      :isChecked="key < currentGuess"
      :key="key"
      :guess="guess"
      :word="WORD"
    />
  </div>
</template>

<style module>
.game {
  max-width: 256px;
  margin: 0 auto;
}
</style>
