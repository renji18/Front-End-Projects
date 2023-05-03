let targetInput = document.getElementById('country')
let results = document.getElementById('autocomplete-results')
let matches = []
let resultsCursor=0
let countryList = ['Albania', 'Columbia', 'Cuba', 'El Salvador', 'Jordan', 'Kenya', 'Nepal', 'Romania', 'Sri Lanka', 'Wales', 'India']

targetInput.focus()

targetInput.addEventListener('keydown', function(event){
    if(event.keyCode == '13'){
        event.preventDefault()
    }
})

targetInput.addEventListener('keyup', function(event){
    results.innerHTML = ''
    toggleResults('hide')
    
    if(this.value.length>0){
        matches = getMatches(this.value)

        if(matches.length > 0){
            displayMatches(matches)
        }
    }
    if(results.classList.contains('visible')){
        switch(event.keyCode){
            case 13:
                targetInput.value = results.children[resultsCursor].innerHTML
                toggleResults('hide')
                resultsCursor = 0
                break
            case 38:
                if(resultsCursor>0){
                    resultsCursor--
                    moveCursor(resultsCursor)
                }
                break
                case 40:
                    if(resultsCursor<matches.length-1){
                        resultsCursor++
                        moveCursor(resultsCursor)
                    }
                break
        }
    }
})

function toggleResults(action){
    if(action == 'show'){ 
        results.classList.add('visible')
    } else if(action == 'hide'){
        results.classList.remove('visible')
    }
}

function getMatches(inputText){
    var matchList = []
    for(var i=0; i<countryList.length; i++){
        if(countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1){
            matchList.push(countryList[i])
        }
    }
    return matchList
}

function displayMatches(matchList){
    var j = 0
    while(j<matchList.length){
        results.innerHTML +='<li class "result">' + matchList[j] + '</li>'
        j++
    }
    moveCursor(resultsCursor)

    toggleResults('show')
}

function moveCursor(pos){
    for(var x=0; x<results.children.length; x++){
        results.children[pos].classList.add('highlighted')
    }
}