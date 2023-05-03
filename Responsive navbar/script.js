let button = document.querySelector('.navicon')

let list = document.querySelector('.list')
let count = 0;
button.addEventListener('click', ()=>{
    count++
    if(count%2 != 0){
        list.style.display = 'block'
    }
    else{
        list.style.display = 'none'
        window.location.reload()
    }
})