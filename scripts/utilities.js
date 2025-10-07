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
