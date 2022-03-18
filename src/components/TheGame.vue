<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import GuessRow from "./GuessRow.vue";
import TheKeyboard from "./TheKeyboard.vue";

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

const onLetterClick = (letter) => {
  if (currentLetter.value < WORD_LENGTH) {
    guesses.value[currentGuess.value][currentLetter.value] =
      letter.toUpperCase();
    currentLetter.value++;
  }
};

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
});

onUnmounted(() => {
  window.removeEventListener("keypress", () => {});
});
</script>

<template>
  <div :class="$style.grid">
    <GuessRow
      v-for="(guess, key) in guesses"
      :isChecked="key < currentGuess"
      :key="key"
      :guess="guess"
      :word="WORD"
    />
  </div>
  <TheKeyboard
    @letterClick="onLetterClick"
    @letterDelete="onLetterDelete"
    @submitGuess="onSubmitGuess"
  />
</template>

<style module>
.grid {
  max-width: 256px;
  margin: 0 auto;
  flex: 1;
}

.keyboard {
  margin: 0 auto;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}

.row {
  display: flex;
  flex: 1;
  margin-bottom: 6px;
  justify-content: space-around;
  align-items: center;
}

.spacer {
  width: 25px;
}
</style>
