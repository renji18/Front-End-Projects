

let text = document.querySelector('.paragraph')

text.addEventListener('click', updateName);

function updateName(){
    let name = prompt('Enter a new name')
    text.textContent = `Player: ${name}`
}