<script setup>
import GuessLetter from "./GuessLetter.vue";

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
</script>

<template>
  <div :class="$style.row">
    <GuessLetter
      v-for="(letter, key) in guess"
      :key="key"
      :letter="letter"
      :word="word"
      :isChecked="isChecked"
      :isPresent="isPresent(letter)"
      :isCorrect="isCorrect(letter, key)"
    />
  </div>
</template>

<style module>
.row {
  display: flex;
}
</style>
