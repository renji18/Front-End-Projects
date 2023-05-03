let body = document.body

let outOfGuesses = document.querySelector('#out-of-guesses')

let low = document.querySelector('#low')

let high = document.querySelector('#high')

let input = document.querySelector('input')

let submitButton = document.querySelector('#submit-guess')

let wrong = document.querySelector('#wrong')

let gameOver = document.querySelector('#game-over')

let congratulations = document.querySelector('#congratulations')

let newGame = document.querySelector('#new-game')

let previousGuesses = document.querySelector('#previous-guesses')








let random = 0;
function randomGuess() {
    random = Math.floor(Math.random() * (100 - 1 + 1) + 1)
}
console.log(randomGuess())
// console.log(random)

var inputValue = 0;

var array = []
function returnText() {
    array.push(inputValue)
    console.log(array)
}

input.addEventListener('keyup', (value) => {
    inputValue = Number(input.value)
    console.log(inputValue)
    wrong.style.display = 'none'
    high.style.display = 'none'
    low.style.display = 'none'       
})

var count = 0;
submitButton.addEventListener('click', everthing)

document.addEventListener('keyup', (e)=>{
    let keyCode = e.keyCode ? e.keyCode : e.which;
    if(keyCode === 13){
        submitButton.click()
    }
})

document.addEventListener('keypress', (e)=>{
    let keyCode = e.keyCode ? e.keyCode : e.which;
    if(keyCode === 13){
        if(count === 10){
            newGame.click()
        }
    }
})

function everthing(){
    previousGuesses.style.display = 'block'
    count++;
    if(inputValue < random){
        low.style.display = 'block'
        wrong.style.display = 'block'
        high.style.display = 'none'
        console.log('Guess too low')
    } else if(inputValue > random){
        low.style.display = 'none'
        wrong.style.display = 'block'
        high.style.display = 'block'
        console.log('Guess too high')
    } else if(inputValue == random){
        high.style.display = 'none'
        wrong.style.display = 'none'
        low.style.display = 'none'
        congratulations.style.display = 'block'
        newGame.style.display = 'block'
        submitButton.disabled = 'true'
        body.style.backgroundColor = 'green'
        body.classList.add('transition')
        input.disabled = 'true'
        console.log('Congratulations')
    }
    if(count == 9 && inputValue!=random){
        body.style.backgroundColor = 'yellow'
        body.classList.add('transition')
    } else if(count == 10 && inputValue!=random){
        high.style.display = 'none'
        wrong.style.display = 'none'
        low.style.display = 'none'
        submitButton.disabled = 'true'
        body.style.backgroundColor = 'red'
        body.classList.add('transition')
        input.disabled = 'true'
        outOfGuesses.style.display = 'block'
        newGame.style.display = 'block'
    }
    returnText()
    previousGuesses.textContent = `Previous guesses: ${array}`
    input.value = ''
}