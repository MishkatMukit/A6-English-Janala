 const loadAllLevels = async()=>{
    showLessonLoader()
    const response = await fetch('https://openapi.programming-hero.com/api/levels/all')
    const alldata = await response.json()
    hideLessonLoader()
    displayAllLevels(alldata.data)
    
}
const displayAllLevels = (levels) =>{
    const lessonContainer = document.getElementById('lesson-container')
    levels.forEach(level=> {
        const btnlevel = document.createElement('button')
        
        btnlevel.innerHTML=`
            <button id="btn-${level.id}" onclick="LoadLessons(${level.level_no},${level.id})"
                    class="btn hover:bg-[#422AD5] hover:text-white btn-sm flex items-center gap-1 text-sm text-[#422AD5] border-2 font-semibold rounded-md py-1 px-4 border-[#422AD5]"><i
                        class="fa-solid fa-book-open"></i> Lesson -${level.level_no
}</button>
        `
        lessonContainer.appendChild(btnlevel)
    });
}
const showWordDetails= async (id)=>{

    const response = await fetch(`https://openapi.programming-hero.com/api/word/${id}`)

    const alldata = await response.json()

    console.log(alldata.data)
    const details = alldata.data
    const modal = document.getElementById('word_details')
     console.log(modal)
     modal.innerHTML=`
        <div class="modal-box">
                        <h3 class="font-semibold text-2xl">${details.word} (<i class="fa-solid fa-microphone"></i> :${details.pronunciation})</h3>
                        <div class="py-3">
                            <p class="font-medium text-xl">Meaning</p>
                            <p class="font-siliguri font-medium text-lg">${details.meaning}</p>
                        </div>
                        <div class="pb-3">
                            <p class="font-medium text-xl">Example</p>
                            <p class=" font-normal text-md">${details.sentence}</p>
                        </div>
                        <div class="pb-3 mb-3 space-y-2">
                            <p class="font-medium font-siliguri text-xl">সমার্থক শব্দ গুলো</p>
                            <p id="syn-container" class=" font-normal text-sm space-x-1">
                                
                                ${details.synonyms.map(word => `
          <span class="py-1 px-2 bg-[#EDF7FF] border-1 border-[#D7E4EF] rounded-md">${word}</span>
        `).join('')}
                            </p>
                        </div>
                        <div class="modal-action-left">
                            <form method="dialog" class="flex">
                                <!-- if there is a button in form, it will close the modal -->
                                <button class="btn bg-[#422AD5] text-white font-medium">Complete Learning</button>
                            </form>
                        </div>
                    </div>
     `


    word_details.showModal()
}
const LoadLessons = async (lessonID, btnID) =>{
    removeActiveClass()
    const activeButton = document.getElementById(`btn-${btnID}`)
    // console.log(activeButton)
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
                            <button  onclick="showWordDetails(${word.id})" class="btn p-3 bg-[#1A91FF20] rounded-lg text-lg"><i
                                    class="fa-solid fa-circle-info"></i></button>
                            <button onclick="pronounceWord('${word.word}')" class="btn border-none p-3 bg-[#1A91FF20] rounded-lg text-lg"><i
                                    class="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>
        `
        wordsContainer.appendChild(wordCard)
    });
    
}

loadAllLevels()