const audio = new AudioContext()

const nodeValue = [
    {node: 'E', key: 'a', frequency: 263.626, active: false},
    {node: 'F', key: 's', frequency: 277.183, active: false},
    {node: 'Gb', key: 'd', frequency: 293.665, active: false},
    {node: 'G', key: 'f', frequency: 311.127, active: false},
    {node: 'Ab', key: 'g', frequency: 329.628, active: false},
    {node: 'A', key: 'h', frequency: 349.228, active: false},
    {node: 'Bb', key: 'j', frequency: 369.994, active: false},
    {node: 'B', key: 'k', frequency: 391.995, active: false},
    {node: 'C', key: 'l', frequency: 415.305, active: false}
]

addEventListener('keydown', (e)=>{
    if(e.repeat) return
    for(let i=0; i<nodeValue.length; i++){
        if(e.key === `${nodeValue[i].key}`){
            let node = nodeValue[i]
            node.active = true
            play()
        }
    }
})

addEventListener('keyup', (e)=>{
    for(let i=0; i<nodeValue.length; i++){
        if(e.key === `${nodeValue[i].key}`){
            let node = nodeValue[i]
            node.active = false
            play()
        }
    }
})

function play(){
    nodeValue.forEach(n =>{
            let div = document.querySelector(`[data-note="${n.node}"]`)
            div.classList.toggle('activeButton', n.active)
        if(n.oscillator != null){
            n.oscillator.stop()
            n.oscillator.disconnect()
        }
    })
    let activeNode = nodeValue.filter(n => n.active)
    let volume = 1/activeNode.length
    activeNode.forEach(n =>{
        startPlayingNote(n, volume)
    })
}

function startPlayingNote(activeNode, volume){
    const oscillator = audio.createOscillator()
    const volumeNode = audio.createGain()
    volumeNode.gain.value = volume
    oscillator.type = 'sine'
    oscillator.frequency.value = activeNode.frequency
    oscillator.connect(volumeNode).connect(audio.destination)
    oscillator.start()
    activeNode.oscillator = oscillator
}