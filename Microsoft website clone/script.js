let btn = document.getElementById('big-shop-now')

btn.addEventListener('mouseenter', ()=>{
    btn.classList.add("w-[110px]")
    console.log('uo')
})

btn.addEventListener('mouseleave', ()=>{
    btn.classList.remove("w-[110px]")
    console.log('uo')
})

