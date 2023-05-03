addEventListener('click', e=>{
    if(e.target.matches('#btn')){
        const card = e.target.closest('#card')
        const answer = card.querySelector('#answer')
        answer.classList.toggle('hidden')
        if(answer.classList.contains('hidden')){
            e.target.textContent = 'Expand'
        } else{
            e.target.textContent = 'Collapse'
        }
    }
})

