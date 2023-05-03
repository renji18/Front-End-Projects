let para = document.querySelector('p');
let increase = document.querySelector('.increase')
let decrease = document.querySelector('.decrease')
let reset = document.querySelector('.reset')


increase.addEventListener('click', ()=>{
    let number = Number(para.textContent)
    para.textContent = number+1
    para.style.color = 'green'
})

decrease.addEventListener('click', ()=>{
    let number = Number(para.textContent)
        para.textContent = number-1
        para.style.color = 'crimson'
    })
    
    reset.addEventListener('click', ()=>{
        para.textContent = '0';
        para.style.color = 'black'
})