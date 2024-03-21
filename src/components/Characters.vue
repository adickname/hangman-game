<template>
    <div class="container">
        <button v-for="n in 26" :key="n" @click="handleClick(n)" :disabled="isButtonClicked(n)">{{ String.fromCharCode(n + 64) }}</button>
    </div>
</template>

<script setup>
import { useWordStore } from "../stores/WordStore.js"
import {ref} from "vue"
const clickedButton = ref([])
function isButtonClicked(n){
    return clickedButton.value.includes(n)
}
function handleClick(n){
    clickedButton.value.push(n)
    wordStore.setUserWord(String.fromCharCode(n + 64))
}
const wordStore = useWordStore()
</script>
