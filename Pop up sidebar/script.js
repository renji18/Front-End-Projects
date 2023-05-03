let button = document.querySelector('.toggle-button')

let list = document.querySelector('.list')


button.addEventListener('click', ()=>{
    list.classList.toggle('width-increaser')
})

