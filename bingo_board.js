const onLoad = function(){

    createBingoFields()
}

window.onload = onLoad




const createBingoFields = function () {
    let numberOfFields = 76
    let bingoContainerNode = document.getElementById('number-container')
    for (let fieldNumber = 1; fieldNumber <= numberOfFields; fieldNumber++ ) {
        let fieldNode = document.createElement('div')
        fieldNode.innerText = fieldNumber
        fieldNode.classList.add('field')
        bingoContainerNode.appendChild(fieldNode)
    }
}

const changeNumbers = function() {
    let arr = [numberOfFields]
    arr= Math.floor(Math.random() * 76 + 1)
}