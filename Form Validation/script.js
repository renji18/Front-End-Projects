let userName = document.querySelector("#name")
let password = document.querySelector("#pwd")
let confirmation = document.querySelector("#confirm")
let terms = document.querySelector("#terms")
let form = document.querySelector("#form")
let error = document.querySelector("#error-notice")


form.addEventListener('submit', (e) => {
    error.classList.add('hidden')
    error.innerHTML = ''
    if (userName.value.length < 6) {
        preventDefaultAndRemoveHidden(e)
        error.innerHTML += '<p>!!! USERNAME TOO SMALL - minimum 10 characters</p>'
    }
    if (password.value.length < 10) {
        preventDefaultAndRemoveHidden(e)
        error.innerHTML += '<p>!!! PASSWORD TOO SMALL - minimum 10 characters</p>'
    }
    if (password.value !== confirmation.value) {
        preventDefaultAndRemoveHidden(e)
        error.innerHTML += '<p>!!! PASSWORDS DON\'T MATCH</p>'
    }
    if (!terms.checked) {
        preventDefaultAndRemoveHidden(e)
        error.innerHTML += '<p>!!! PLEASE AGREE TO TERMS</p>'
    }
})

function preventDefaultAndRemoveHidden(n){
    n.preventDefault()
    error.classList.remove('hidden')
}