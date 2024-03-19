<template>
    <div>
        <p>{{ lengthWord}}</p>
        <span v-for="n in lengthWord">_</span><hr>
    </div>
</template>

<script setup>
import { useWordStore } from "../stores/WordStore.js"
import {ref, watchEffect} from "vue"
const wordStore = useWordStore()
const lengthWord = ref(wordStore.getWordLength)
setTimeout(()=>{ lengthWord.value = wordStore.getWordLength},1000)

</script>
<style scoped>
p{
    color: darkorange;
}
span{
    padding: 3px;
}
</style>
