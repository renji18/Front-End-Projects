let text = document.querySelector('#text')
let us = document.querySelector('#us')
let uk = document.querySelector('#uk')
let button = document.querySelector('.btn')
let story = document.querySelector('.random-story')

const arrNames = ['Big Daddy', 'Father Christmas', 'Willy The Goblin']
const arrPlaces = ['Disneyland', 'soup kitchen', 'White House']
const arrHappening = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}




const storyText = `It was 94 farenheit outside, so placeholderName went for a walk. When they got to the placeholderPlace, they stared in horror for a few moments, then placeholderAction. Bob, saw the whole thing, but was not surprised - placeholderName weighs 300 pound, and it was a hot day.`

button.addEventListener('click', randomStory)

function randomStory(){
    let newStory = storyText
    const x = randomValueFromArray(arrNames)
    const y = randomValueFromArray(arrPlaces)
    const z = randomValueFromArray(arrHappening)
    newStory = newStory.replaceAll('placeholderName', x)
    newStory = newStory.replaceAll('placeholderPlace', y)
    newStory = newStory.replaceAll('placeholderAction', z)
    if(text.value != ''){
        const name = text.value;
        newStory = newStory.replaceAll('Bob', name)
    }
    if(document.getElementById('uk').checked){
        newStory = newStory.replaceAll('94 farenheit', '34 centigrade')
        newStory = newStory.replaceAll('300 pound', '21 stone')
    }
    story.textContent = newStory;
    story.style.visibility = 'visible'
}


