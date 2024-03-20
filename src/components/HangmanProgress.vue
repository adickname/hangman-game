<template>
    <div>
    </div>
</template>

<script setup>
import { useWordStore } from "../stores/WordStore.js"
import {ref, watchEffect} from "vue"
const wordStore = useWordStore()

</script>
<style scoped>
span{
    padding: 3px;
}
</style>
