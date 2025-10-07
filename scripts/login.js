document.getElementById('btn-start').addEventListener('click',(event)=>{
    event.preventDefault()
    const name = getValueByID('name-input')
    if(name===''){
        alert('Please Enter your name to proceed')
        return
    }
    const password = getValueByID('pass-input')
    if(password===''){
        alert('Please Enter Your Password')
    }
    else{
        if(password==='1234'){
           document.getElementById('navbar').classList.remove('hidden') 
           document.getElementById('hero-form').classList.add("hidden")
           document.getElementById('learn').classList.remove("hidden")
           document.getElementById('faq').classList.remove("hidden")
        }
        else{
            alert('Wrong Password')
        }
        
    }   
})