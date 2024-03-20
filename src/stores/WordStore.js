import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useWordStore = defineStore("word", () => {
  const word = ref("");
  const userWord = ref([])
  function initArrayOfUserWord(length){
    for (let i = 0; i < length; i++) {
      userWord.value[i]="_"
    }
  }
  const changeValue = (newValue) => {
    word.value = newValue.toUpperCase()
    initArrayOfUserWord(word.value.length)
  };
  const getProgressWord = computed(()=>{
    let formatedWord = userWord.value.join("")
    return formatedWord
  })
  const getWord = computed(() => word.value);
  function setUserWord(letter){
    for(let i=0; i<=word.value.length;i++){
    if(word.value[i]===letter){
      userWord.value[i]=letter
    };
    }
  }
  return {
    getWord,
    userWord,
    getProgressWord,
    changeValue,
    setUserWord,
  };
});
