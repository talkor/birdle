<script setup>
const emit = defineEmits(["click"]);
</script>

<template>
  <button @click="emit('click')" :class="$style.button"><slot /></button>
</template>

<style module>
.button {
  height: 60px;
  background-color: #818384;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  margin-right: 6px;
  flex: 1;
  cursor: pointer;
  font-weight: bold;
}

.button:last-of-type {
  margin-right: 0;
}
</style>
