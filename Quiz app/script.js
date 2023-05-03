let btn = document.querySelector("#btn")
let divs = document.querySelectorAll('div')
let body = document.body
let questions = document.querySelectorAll('[data-type="question"]')
let congratulations = document.querySelector('#congratulations')
let tryAgain = document.querySelector('#try-again')
console.log(questions.length)

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let count = 0;
    for (let i = 0; i < divs.length; i++) {
        let inputs = divs[i].querySelectorAll('input')
        console.log(inputs)
        for (let j = 0; j < inputs.length; j++) {
            divs[i].classList.add('text-red-800')
            if (inputs[j].checked && inputs[j].value === 'true') {
                divs[i].classList.remove('text-red-800')
                divs[i].classList.add('text-cyan-600')
                count = count+1
                body.classList.add('bg-black/[.75]')
            } else if (inputs[j].checked && inputs[j].value !== 'true') {
                divs[i].classList.remove('text-cyan-600')
                divs[i].classList.add('text-red-800')
            }
            if(count == questions.length){
                congratulations.classList.remove('hidden')
                tryAgain.classList.add('hidden')
            } else{
                congratulations.classList.add('hidden')
                tryAgain.classList.remove('hidden')
            }
        }
    }
    body.classList.add('bg-black/[.75]')
    
    setTimeout(() => {
        body.classList.remove('bg-black/[.75]')
        congratulations.classList.add('hidden')
        tryAgain.classList.add('hidden')
    }, 2000);
})