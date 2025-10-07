const getValueByID=(id)=>{
    return document.getElementById(id).value
}
const removeActiveClass=()=>{
    const activeButtons = document.getElementsByClassName("active")
    for(let button of activeButtons){
        button.classList.remove("active")
    }
}
const showWordsLoader=()=>{
    document.getElementById('btn-loader').classList.remove("hidden")
    document.getElementById('words-container').classList.add("hidden")

}
const hideWordsLoader=()=>{
    document.getElementById('btn-loader').classList.add("hidden")
    document.getElementById('words-container').classList.remove("hidden")

}
const showLessonLoader=()=>{
    document.getElementById('lesson-loader').classList.remove("hidden")
    document.getElementById('lesson-container').classList.add("hidden")

}
const hideLessonLoader=()=>{
    document.getElementById('lesson-loader').classList.add("hidden")
    document.getElementById('lesson-container').classList.remove("hidden")

}
const pronounceWord = (word) => {
    console.log(word)
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-EN'; // English
      window.speechSynthesis.speak(utterance);
    }