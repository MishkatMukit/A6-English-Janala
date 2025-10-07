const getValueByID=(id)=>{
    return document.getElementById(id).value
}
const removeActiveClass=()=>{
    const activeButtons = document.getElementsByClassName("active")
    for(let button of activeButtons){
        button.classList.remove("active")
    }
}