let btn = document.querySelector('#btn')
let input = document.querySelector('#input-field')

addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        createItem()
    }
})

function createItem(){
    let li = document.createElement('li')
    li.classList = 'hover:line-through hover:cursor-pointer hover:text-red-600'
    li.textContent = input.value
    ul.appendChild(li)
    input.value = ''
    li.addEventListener('click', ()=>{
        li.remove()
    })
}

btn.addEventListener('click', createItem)