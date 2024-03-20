<template>
    <div>
        <p>{{ wordStore.getProgressWord }}</p>
    </div>
</template>

<script setup>
import { useWordStore } from "../stores/WordStore.js"
const wordStore = useWordStore()
</script>
<style scoped>
p {
    letter-spacing: 6px;
}
</style>
