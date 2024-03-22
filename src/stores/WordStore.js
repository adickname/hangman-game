import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useWordStore = defineStore("word", () => {
  const word = ref("");
  const lifes = ref(8)
  const userWord = ref([])
  const pathToImage = ref("")
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
    let isLetter = false
    for(let i=0; i<=word.value.length;i++){
    if(word.value[i]===letter){
      userWord.value[i]=letter
      isLetter = true
    }
    }
    if(!isLetter){
      decrementLifes()
      changePathToImage(lifes.value)
    }
  }
  const getLifes = computed(()=>lifes.value)
  function decrementLifes(){
    lifes.value--
  }
  const getPathToImage = computed(()=>pathToImage.value)
  function changePathToImage(numberAsName){
    pathToImage.value = `src/assets/${numberAsName}.png`
  }
  return {
    getWord,
    userWord,
    getProgressWord,
    changeValue,
    setUserWord,
    getLifes,
    decrementLifes,
    getPathToImage
  };
});
