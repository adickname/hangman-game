<template>
    <div><img :src="wordStore.getPathToImage" alt=""></div>
</template>

<script setup>
import { useWordStore } from "../stores/WordStore.js"
const wordStore = useWordStore()
</script>
