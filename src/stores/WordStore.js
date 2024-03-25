import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";

export const useWordStore = defineStore("word", () => {
  const word = ref("");
  const lifes = ref(8)
  const userWord = ref([])
  const pathToImage = ref("")
  const gameStatus = reactive({
    gameStatus: '',
    isEnd: false
  })
  function initArrayOfUserWord(length){
    for (let i = 0; i < length; i++) {
      userWord.value[i]="_"
    }
  }
  const changeValue = (newValue) => {
    word.value = newValue.toUpperCase()
    initArrayOfUserWord(word.value.length)
  };
  function isWin(){
    if(userWord.value.length>0){
      if(!userWord.value.includes("_")){
        gameStatus.isEnd = true
        gameStatus.gameStatus = 'win'
      }
    }
 
  }
  const getProgressWord = computed(()=>{
    let formatedWord = userWord.value.join("")
    isWin()
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
    if(lifes.value===0){
      gameStatus.isEnd = true
      gameStatus.gameStatus = 'lose'
    }
  }
  const getPathToImage = computed(()=>pathToImage.value)
  function changePathToImage(numberAsName){
    pathToImage.value = `src/assets/${numberAsName}.png`
  }

  const getGameStatus = computed(()=>gameStatus)

  return {
    getWord,
    userWord,
    getProgressWord,
    changeValue,
    setUserWord,
    getLifes,
    decrementLifes,
    getPathToImage,
    getGameStatus
  };
});
