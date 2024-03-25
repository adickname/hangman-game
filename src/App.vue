<script setup>
import Characters from "./components/Characters.vue"
import { useWordStore } from "./stores/WordStore.js"
const wordStore = useWordStore()
import { getWord } from "./api/getWordFromApi";
import HangmanProgress from "./components/HangmanProgress.vue";
import Image from "./components/Image.vue"
import GameEnd from "./components/GameEnd.vue";
getWord()
</script>

<template>
  <HangmanProgress />
  <Characters />
  {{ wordStore.getWord }}
  {{ wordStore.getLifes }}
  <Image />
  <div v-if="wordStore.getGameStatus.isEnd">
    <GameEnd />
  </div>
</template>
