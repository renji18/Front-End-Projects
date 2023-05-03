let openBtn = document.querySelector("#open-btn")
let closeBtn = document.querySelector("#close-btn")
let openModal = document.querySelector("#open-modal")
let closeModal = document.querySelector("#close-modal")
let overlay = document.querySelector("#overlay")

openBtn.addEventListener('click', ()=>{
    closeModal.classList.replace('hidden', 'block')
    overlay.classList.replace('hidden', 'block')
    openModal.classList.replace('bg-slate-500', 'bg-slate-400')
    openModal.classList.replace('text-red-600', 'text-red-300')
})

closeBtn.addEventListener('click', closer)

overlay.addEventListener('click', closer)

function closer(){
    closeModal.classList.replace('block', 'hidden')
    openModal.classList.replace('bg-slate-400', 'bg-slate-500')
    overlay.classList.replace('block', 'hidden')
    openModal.classList.replace('text-red-300', 'text-red-600')
}


