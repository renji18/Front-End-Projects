document.addEventListener('keydown', e => {
    const containerText = document.querySelector('#text');
    const key = e.key;
    switch (key) {
        case "ArrowUp":
            containerText.classList.replace('y-center', 'y-up')
            containerText.classList.replace('y-down', 'y-center')
            break;
        case "ArrowDown":
            containerText.classList.replace('y-center', 'y-down')
            containerText.classList.replace('y-up', 'y-center')
            break;
        case "ArrowLeft":
            containerText.classList.replace('x-center', 'x-left')
            containerText.classList.replace('x-right', 'x-center')
            break;
        case "ArrowRight":
            containerText.classList.replace('x-center', 'x-right')
            containerText.classList.replace('x-left', 'x-center')
            break;
    }
})