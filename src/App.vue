<script setup>
import Characters from "./components/Characters.vue"
import { useWordStore } from "./stores/WordStore.js"
const wordStore = useWordStore()
import { getWord } from "./api/getWordFromApi";
import HangmanProgress from "./components/HangmanProgress.vue";
getWord()
</script>

<template>
  <HangmanProgress></HangmanProgress>
  <Characters></Characters>
  {{ wordStore.getWord }}
  <div><img src="./assets/game-over.png" alt=""></div>
</template>
