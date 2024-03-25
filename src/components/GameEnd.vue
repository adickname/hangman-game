<template>
    <div>
        <p>End of Game you {{ wordStore.getGameStatus.gameStatus }}</p>
    </div>
</template>

<script setup>
import { useWordStore } from "../stores/WordStore.js"
const wordStore = useWordStore()
</script>
