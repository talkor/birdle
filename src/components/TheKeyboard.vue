<script setup>
import BaseButton from "./BaseButton.vue";

const emit = defineEmits(["letterClick", "submitGuess", "letterDelete"]);

const KEYS_ROW_1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const KEYS_ROW_2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const KEYS_ROW_3 = ["Z", "X", "C", "V", "B", "N", "M"];
</script>

<template>
  <div :class="$style.keyboard">
    <div :class="$style.row">
      <BaseButton
        v-for="(letter, key) in KEYS_ROW_1"
        :key="key"
        @click="emit('letterClick', letter)"
        >{{ letter }}</BaseButton
      >
    </div>
    <div :class="$style.row">
      <div :class="$style.spacer" />
      <BaseButton
        v-for="(letter, key) in KEYS_ROW_2"
        :key="key"
        @click="emit('letterClick', letter)"
        >{{ letter }}</BaseButton
      >
      <div :class="$style.spacer" />
    </div>
    <div :class="$style.row">
      <BaseButton @click="emit('submitGuess')">ENTER</BaseButton>
      <BaseButton
        v-for="(letter, key) in KEYS_ROW_3"
        :key="key"
        @click="emit('letterClick', letter)"
        >{{ letter }}</BaseButton
      >
      <BaseButton @click="emit('letterDelete')">DEL</BaseButton>
    </div>
  </div>
</template>

<style module>
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
