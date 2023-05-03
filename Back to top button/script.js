let button = document.getElementById('btn')
let body = document.body
let docElem = document.documentElement
let offset = 100
let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
let isChromeAndIsSafari = navigator.userAgent.toLowerCase().indexOf('safari')>-1

let scrollPos, docHeight

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight)
if(docHeight != 'undefined'){
    offset = docHeight/6
}

window.addEventListener('scroll', function(event){
    scrollPos = body.scrollTop || docElem.scrollTop
    button.className = (scrollPos > offset) ? 'visible' : ''
})

button.addEventListener('click', function(event){
    event.preventDefault()
    if(isFirefox || isChromeAndIsSafari){
        docElem.scrollTop=0
    } else{
        body.scrollTop = 0
    }
})