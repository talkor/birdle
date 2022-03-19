<script setup>
const emit = defineEmits(["close"]);
defineProps({ show: Boolean });
</script>

<template>
  <div v-if="show" :class="$style.overlay" @click="emit('close')">
    <div :class="$style.modal">
      <div :class="$style.header">
        <button :class="$style.closeButton">Close</button>
      </div>
      <div :class="$style.content"><slot /></div>
    </div>
  </div>
</template>

<style module>
.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  width: 50vw;
  background-color: #181818;
  min-height: 50vh;
  border-radius: 4px;
  animation: jumpin 0.4s;
  position: relative;
  text-align: center;
}

.closeButton {
  border: 0;
  background: none;
  color: white;
  margin: 10px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.header {
  display: flex;
  justify-content: flex-end;
}

.content {
  padding: 0 20px 20px 20px;
}

@keyframes jumpin {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
