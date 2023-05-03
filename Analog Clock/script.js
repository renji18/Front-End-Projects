let body = document.body
let main = document.querySelector('.main-clock')
let minute = document.querySelector('.minute-hand')
let hour = document.querySelector('.hour-hand')
let second = document.querySelector('.second-hand')


setInterval(()=>{
    let d = new Date();
    let min = d.getMinutes();
    let hr = d.getHours();
    let sec = d.getSeconds();
    let min_rotation = 6*min;
    let sec_rotation = 6*sec;
    let hr_rotaion = 30*hr+min/2;
    hour.style.transform = `rotate(${hr_rotaion}deg)`
    minute.style.transform = `rotate(${min_rotation}deg)`
    second.style.transform = `rotate(${sec_rotation}deg)`
}, 1000)