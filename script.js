let tarsierPics = document.querySelector(".tarsierPics")
let narrationText = document.querySelector(".narrationText")

let feedButton = document.querySelector('#feedButton')
let feedRightFoodButton = document.querySelector('#feedRightFoodButton')
let feedWrongFoodButton = document.querySelector('#feedWrongFoodButton')

let petFirstButton = document.querySelector('#petFirstButton')
let petSnackButton = document.querySelector('#petSnackButton')

let napButton = document.querySelector('#napTimeButton')

let returnButton = document.querySelector('#returnButton')

let body = document.querySelector("body")

feedButton.addEventListener('click', e=>{
    feedRightFoodButton.classList.remove("hidden")
    feedWrongFoodButton.classList.remove("hidden")
    feedButton.classList.add("hidden")
    narrationText.innerHTML = "<p>Feed him what?</p>"
    body.classList.remove("white")
    body.classList.remove("black-text")
})

let lizardCount = 0
feedRightFoodButton.addEventListener('click', e=>{
    tarsierPics.innerHTML = 
    "<img src='goodFood.jpg'/>"
    narrationText.innerHTML = "<p>He likes it!</p>"
    lizardCount+=1
    if (lizardCount <3){
    narrationText.innerHTML = "<p>Mmmmm!</p>"
    } else if(lizardCount >=3 ) {
        tarsierPics.innerHTML ="<img src='wowFood.jpg'/>"
        narrationText.innerHTML = "<p>oof. enough lizard.</p>"
    }
})

feedWrongFoodButton.addEventListener('click', e=>{
    tarsierPics.innerHTML = 
    "<img src='grossFood.jpg'/>"
    narrationText.innerHTML = "<p>ick ick ick!! not that!!</p>"
})

petFirstButton.addEventListener('click', e=>{
    tarsierPics.innerHTML = "<img src='pet1.jpeg'/>"
    narrationText.innerHTML = "<p>He doesn't look ready to be touched yet. Maybe feed him a snack first?</p>"
    petSnackButton.classList.remove('hidden')
    petFirstButton.classList.add("hidden")
    feedRightFoodButton.classList.add("hidden")
    feedWrongFoodButton.classList.add("hidden")
    feedButton.classList.remove("hidden")
    body.classList.remove("white")
    body.classList.remove("black-text")
})

let bugCount = 0
petSnackButton.addEventListener('click', e=>{
    bugCount+=1
    tarsierPics.innerHTML = "<img src='giveSnack.jpg'/>"
    petFirstButton.classList.add("hidden")
    narrationText.innerHTML = "<p>You're on the right track... keep going!</p>"
    if (bugCount < 4 && bugCount > 1){
        narrationText.innerHTML = "<p>More bugs</p>"
    } else if (bugCount == 4) {
        narrationText.innerHTML = "<p>MORE bugs!!</p>"
    } else if (bugCount >= 5) {
        tarsierPics.innerHTML = "<img src='pet2.jpeg'/>"
        narrationText.innerHTML = "<p>Nice! A little bug goes a long way!</p>"
        petFirstButton.classList.remove('hidden')
        petSnackButton.classList.add('hidden')
    }
})

napButton.addEventListener('click', e=>{
    tarsierPics.innerHTML = "<img src='naptime.jpg'/>"
    narrationText.innerHTML = "<p>Shh... Tarsiers are nocturnal - they sleep in the daytime</p>"
    body.classList.toggle("white")
    body.classList.toggle("black-text")
    napButton.innerHTML = "Turn the lights back off"
    feedRightFoodButton.classList.add("hidden")
    feedWrongFoodButton.classList.add("hidden")
    feedButton.classList.remove("hidden")
})

returnButton.addEventListener("click",e=>{
    feedRightFoodButton.classList.add("hidden")
    feedWrongFoodButton.classList.add("hidden")
    feedButton.classList.remove("hidden")
    narrationText.innerHTML = "What do you want to do today?"
    body.classList.remove("white")
    body.classList.remove("black-text")
    petFirstButton.classList.remove('hidden')
    petSnackButton.classList.add('hidden')
    napButton.innerHTML = "Take a nap"
    bugCount = 0;
})