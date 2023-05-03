let card  = []
let cards = document.getElementsByClassName('card')
for(let i =0; i<cards.length; i++){
    card.push(cards[i])
}
card[0].style.display = 'block'

// The shuffle button
{
let randomButton = document.querySelector('.random-button')
function randomNumber(){
    let randomDisplay = Math.floor(Math.random()*cards.length)
    return randomDisplay
}
randomButton.addEventListener('click', ()=>{
    let rand = randomNumber()
    for(let j=0; j<cards.length; j++){
        card[`${rand}`].style.display ='block'
        if(card[j] != card[rand]){
            card[j].style.display = 'none'
        }
    }
})
}


// The left button
{
let leftArrow = document.querySelector('.leftArrow')
leftArrow.addEventListener('click', ()=>{
    for(let i=0; i<card.length; i++){
        if(card[i].style.display=='block' && card[0].style.display != 'block'){
            card[i].style.display = 'none'
            card[i-1].style.display = 'block'
            break
        }
        else if(card[0].style.display == 'block'){
            card[0].style.display = 'none'
            card[card.length-1].style.display = 'block'
            break
        }
    }
})
}


// The right button
{
let rightArrow = document.querySelector('.rightArrow')
rightArrow.addEventListener('click', ()=>{
    for(let i=0; i<card.length; i++){
        if(card[i].style.display=='block' && card[card.length-1].style.display != 'block'){
            card[i].style.display = 'none'
            card[i+1].style.display = 'block'
            break
        }
        else if(card[card.length-1].style.display == 'block'){
            card[0].style.display = 'block'
            card[card.length-1].style.display = 'none'
            break
        }
    }
})
}