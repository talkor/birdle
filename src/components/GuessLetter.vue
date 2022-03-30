<script setup>
defineProps({
  letter: String,
  isChecked: Boolean,
  isPresent: Boolean,
  isCorrect: Boolean,
});
</script>

<template>
  <div
    :class="[
      $style.letter,
      {
        [$style.absent]: isChecked && !isPresent,
        [$style.present]: isChecked && isPresent,
        [$style.correct]: isChecked && isCorrect,
        [$style.reveal]: isChecked,
      },
    ]"
  >
    {{ letter }}
  </div>
</template>

<style module>
.letter {
  text-transform: uppercase;
  width: 60px;
  height: 60px;
  border: 2px solid #3a3a3c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #ffffff;
  font-weight: 800;
  margin: 2px;
}

.absent {
  border: none;
  background-color: #3a3a3c;
}

.present {
  border: none;
  background-color: #b59f3b;
}

.correct {
  border: none;
  background-color: #538d4e;
}

@keyframes reveal {
  from {
    transform: rotateX(100deg);
  }
  to {
    transform: rotateX(1);
  }
}

.reveal {
  transition: 0.6s;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  animation-name: reveal;
  animation-duration: 0.8s;
}
</style>
