<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import GuessRow from "./GuessRow.vue";
import TheKeyboard from "./TheKeyboard.vue";
import BaseModal from "./BaseModal.vue";

const WORD = "BIRD";
const NUM_GUESSES = 6;
const WORD_LENGTH = 4;

const currentGuess = ref(0);
const currentLetter = ref(0);
const isGameOn = ref(true);
const showModal = ref(false);
const isWon = ref(false);

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
    isWon.value = true;
    setTimeout(() => {
      showModal.value = true;
    }, 2000);
    return;
  }

  currentGuess.value++;

  if (currentGuess.value < NUM_GUESSES) {
    currentLetter.value = 0;
  }

  if (currentGuess.value === NUM_GUESSES) {
    isGameOn.value = false;
    isWon.value = false;
    setTimeout(() => {
      showModal.value = true;
    }, 2000);
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
  <BaseModal :show="showModal" @close="showModal = false">
    <h1 v-if="isWon">BIRD is the WORD!</h1>
    <template v-else>
      <h1>Don't you know about the BIRD?</h1>
      <h4 :class="$style.subtitle">
        Everybody knows that the BIRD is the WORD!
      </h4>
    </template>
    <img :class="$style.gif" src="../assets/gif.gif" />
    <iframe
      width="100%"
      height="200px"
      src="https://www.youtube.com/embed/9Gc4QTqslN4?controls=0&autoplay=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </BaseModal>
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

.gif {
  width: 100%;
}

.subtitle {
  margin-bottom: 10px;
}
</style>
