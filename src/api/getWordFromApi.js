//https://random-word-api.herokuapp.com/home
//https://random-word-api.herokuapp.com/word
import { useWordStore } from "@/stores/WordStore.js"
export const getWord = async () => {
    const wordStore = useWordStore()
    let word = await fetch('https://random-word-api.herokuapp.com/word').then(res => res.json()).then(res => res[0])
    wordStore.changeValue(await word);
}