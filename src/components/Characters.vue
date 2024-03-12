<template>
    <div class="container">
        <button v-for="n in 26">{{ String.fromCharCode(n + 64) }}</button>
    </div>
</template>

<script setup>
</script>
