const sliderContainer = document.querySelector('.slider-container')

const sliderRight = document.querySelector('.right-slide')

const sliderLeft = document.querySelector('.left-slide')

const upButton = document.querySelector('.up-button')

const downButton = document.querySelector('.down-button')

const slidesLength = sliderRight.querySelectorAll('div').length

let activeSlideIndex = 0

sliderLeft.style.top =`-${(slidesLength-1)*100}vh`

upButton.addEventListener('click', ()=>changeslide('up'))
downButton.addEventListener('click', ()=>changeslide('down'))

const changeslide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight // Client height is a js keyword that retrieves the height of the active page on the web browser
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength-1){
            activeSlideIndex = 0;
        }
    }
    else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength-1;
        }
    }

    sliderRight.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`
    sliderLeft.style.transform = `translateY(${activeSlideIndex*sliderHeight}px)`

}