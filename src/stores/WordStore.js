import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useWordStore = defineStore("word", () => {
  const word = ref("");
  const wordLength = ref()
  const changeValue = (newValue) => {
    word.value = newValue;
  };
  watch(word, (newValue)=>{
    wordLength.value = newValue.length
  })
  const getWord = computed(() => word.value);
  const getWordLength = computed(() => wordLength.value);
  return {
    word,
    changeValue,
    getWord,
    getWordLength,
  };
});
