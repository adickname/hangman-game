<script setup>
import CharactersVue from "./components/Characters.vue"
import { useWordStore } from "./stores/WordStore.js"
const wordStore = useWordStore()
import { getWord } from "./api/getWordFromApi";
getWord()
</script>

<template>
  <CharactersVue></CharactersVue>
  {{ wordStore.getWord }}
</template>