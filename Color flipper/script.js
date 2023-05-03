if(typeof window.ethereum !== 'undefined'){
    console.log('Metamask detected');
    window.ethereum.request({method: 'eth_requestAccounts'})
} else {
    console.log('Metamask not detected');
}

let body = document.body;

let button = document.querySelector('button')
let para = document.querySelector('p')

function random(){
    let a = Math.floor(Math.random()*256);
    return a;
}

body.style.backgroundColor = 'crimson';

button.addEventListener('click', ()=>{
    let red = random()
    let blue = random()
    let green = random()
    let red_para = blue
    let blue_para = green
    let green_para = red
    para.textContent = `Color flipper: rgb(${red}, ${green}, ${blue})`
    para.style.color =     body.style.backgroundColor = `rgb(${red_para}, ${green_para}, ${blue_para})`

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})