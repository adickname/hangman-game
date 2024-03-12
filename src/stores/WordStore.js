import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useWordStore = defineStore('word', () => {

    const word = ref('');
    const changeValue = (newValue) => { word.value = newValue };
    const getWord = computed(() => word.value);
    return {
        word,
        changeValue,
        getWord
    }
})
