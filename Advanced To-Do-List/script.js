const input = document.querySelector('#input')
const btn = document.querySelector("#addBtn")
const template = document.querySelector('template')
const container = document.querySelector("#container")
const listFlag = document.querySelector("#list")


const PREFIX = "Advanced-list"
const STORAGE_KEY = `${PREFIX}-todo`


let itemArray = getLocalStorage()
itemArray.forEach(displayItems);


btn.addEventListener('click', () => {
    if (input.value === '') return
    let inputValue = input.value
    const newArray = {
        name: inputValue,
        status: false,
        id: new Date().valueOf().toString()
    }
    itemArray.push(newArray)
    setLocalStorage()
    displayItems(newArray)
    input.value = ''
})

addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        btn.click()
    }
})

container.addEventListener('change', e => {
    if (!e.target.matches("#checkbox")) return
    const li = e.target.closest('li')
    const select = itemArray.find(t => t.id === li.dataset.id)
    select.status = e.target.checked
    setLocalStorage()
    clearItems()
    itemArray.forEach(displayItems)
})

container.addEventListener('click', e => {
    if (!e.target.matches("#deleteBtn")) return
    const parent = e.target.closest('li')
    const dataId = parent.dataset.id
    itemArray = itemArray.filter(element => element.id !== dataId)
    setLocalStorage()
    clearItems()
    itemArray.forEach(displayItems)
    if(itemArray.length === 0){
        listFlag.classList.add('hidden')
    }
})

function setLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(itemArray))
}

function getLocalStorage() {
    const stringArray = localStorage.getItem(STORAGE_KEY)
    return JSON.parse(stringArray) || []
}

function displayItems(content) {
    if(itemArray.length !== 0){
        listFlag.classList.remove('hidden')
    }
    const clone = template.content.cloneNode(true)
    const text = clone.querySelector('#text-node')
    const li = clone.querySelector('li')
    li.dataset.id = content.id
    text.textContent = content.name
    const checkbox = clone.querySelector('#checkbox')
    checkbox.checked = content.status
    container.appendChild(clone)
    if(!checkbox.checked) return
    li.classList.add('text-red-300')
    li.classList.add('line-through')
}

function clearItems(){
    container.textContent = ''
}