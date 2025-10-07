 const loadAllLevels = async()=>{
    const response = await fetch('https://openapi.programming-hero.com/api/levels/all')
    const alldata = await response.json()
    displayAllLevels(alldata.data)
}
const displayAllLevels = (levels) =>{
    const lessonContainer = document.getElementById('lesson-container')
    levels.forEach(level=> {
        const btnlevel = document.createElement('button')
        
        btnlevel.innerHTML=`
            <button id="btn-${level.id}" onclick="showLessons(${level.level_no},${level.id})"
                    class="btn hover:bg-[#422AD5] hover:text-white btn-sm flex items-center gap-1 text-sm text-[#422AD5] border-2 font-semibold rounded-md py-1 px-4 border-[#422AD5]"><i
                        class="fa-solid fa-book-open"></i> Lesson -${level.level_no
}</button>
        `
        lessonContainer.appendChild(btnlevel)
    });
}

const showLessons = async (lessonID, btnID) =>{
    removeActiveClass()
    const activeButton = document.getElementById(`btn-${btnID}`)
    console.log(activeButton)
    activeButton.classList.add('active')
    showWordsLoader()
    const response = await fetch(`https://openapi.programming-hero.com/api/level/${lessonID}`)
    const words = await response.json()
    hideWordsLoader()
    displayLessons(words.data)

}

const displayLessons = (words)=>{
    document.getElementById('initial-vocabulary').classList.add("hidden")
    const wordsContainer = document.getElementById('words-container');
        wordsContainer.innerHTML=''
        if(words.length===0){
            document.getElementById('no-vocabulary').classList.remove('hidden')
            return
        }
        document.getElementById('no-vocabulary').classList.add('hidden')
        words.forEach(word=> {
        const wordCard = document.createElement('div')
        wordCard.innerHTML=`
                    <div class=" space-y-6 max-w-[500px] bg-white p-12 rounded-xl text-center">
                        <h3 class="font-semibold text-3xl">${word.word}</h3>
                        <p class="font-medium text-xl">Meaning /Pronounciation</p>
                        <p class="font-semibold text-2xl font-siliguri">"${word.meaning} / ${word.pronunciation}"</p>
                        <div class="flex justify-between">
                            <button class="btn p-3 bg-[#1A91FF20] rounded-lg text-lg"><i
                                    class="fa-solid fa-circle-info"></i></button>
                            <button class="btn border-none p-3 bg-[#1A91FF20] rounded-lg text-lg"><i
                                    class="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>
        `
        wordsContainer.appendChild(wordCard)
    });
    
}

loadAllLevels()