<script setup>
import { ref, watch } from "vue";
import GuessLetter from "./GuessLetter.vue";

const currentRevealed = ref(-1);

const props = defineProps({
  guess: Array,
  word: String,
  isChecked: Boolean,
});

const isPresent = (letter) => {
  if (!props.isChecked) {
    return;
  }
  return letter && props.word.includes(letter);
};

const isCorrect = (letter, position) => {
  if (!props.isChecked) {
    return;
  }

  return letter && props.word[position] === letter;
};

watch(
  () => props.isChecked,
  (currentValue) => {
    if (currentValue) {
      reveal();
    }
  }
);

const reveal = () => {
  currentRevealed.value++;
  setTimeout(() => {
    if (currentRevealed.value < 4) {
      reveal();
    }
  }, 400);
};
</script>

<template>
  <div :class="$style.row">
    <GuessLetter
      v-for="(letter, key) in guess"
      :key="key"
      :letter="letter"
      :word="word"
      :isChecked="key <= currentRevealed"
      :isPresent="isPresent(letter)"
      :isCorrect="isCorrect(letter, key)"
    />
  </div>
</template>

<style module>
.row {
  display: flex;
}

.reveal:nth-child(2) {
  animation-delay: 0.5s;
}
.reveal:nth-child(3) {
  animation-delay: 1s;
}
.reveal:nth-child(4) {
  animation-delay: 1.5s;
}
</style>
