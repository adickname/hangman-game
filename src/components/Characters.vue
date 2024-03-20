<template>
    <div class="container">
        <button v-for="n in 26" @click="wordStore.setUserWord(String.fromCharCode(n + 64))">{{ String.fromCharCode(n + 64) }}</button>
    </div>
</template>

<script setup>
import { useWordStore } from "../stores/WordStore.js"
const wordStore = useWordStore()
</script>
