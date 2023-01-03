// JS Cod by Javad Shahnavaz



let $ = document

const inputField = $.querySelector("#input-field")
const container = $.querySelector(".container")
const card = $.querySelector(".card")
const cardColumns = $.querySelector(".card-columns")
const cardText = $.querySelector(".card-text")
const btnSave = $.querySelector("#btn-save")
const btnDelete = $.querySelector("#btn-delete")
const colorBox = $.querySelectorAll(".color-box")

inputField.value = ""

function inputHandlerWord (event){
    if(event.keyCode === 13 ){
        let divCardList = $.createElement ("div")
        divCardList.className = "card shadow-sm rounded"

        let cardTextValue = $.createElement ("p")
        cardTextValue.className = "card-text p-3"
        cardTextValue.innerHTML = inputField.value

        let bgValue = inputField.style.backgroundColor
        divCardList.addEventListener("click", removeNote)
        cardTextValue.style.backgroundColor = bgValue
        divCardList.append(cardTextValue)
        cardColumns.append(divCardList)

        inputField.value = ""
        inputField.style.backgroundColor = ""
    }
   
}

function removeNote(event){
    event.target.parentElement.remove()
}

function clickHandlerAdd (){
    let divCardList = $.createElement ("div")
        divCardList.className = "card shadow-sm rounded"

        let cardTextValue = $.createElement ("p")
        cardTextValue.className = "card-text p-3"
        cardTextValue.innerHTML = inputField.value

        let bgValue = inputField.style.backgroundColor
        divCardList.addEventListener("click", removeNote)
        cardTextValue.style.backgroundColor = bgValue
        divCardList.append(cardTextValue)
        cardColumns.append(divCardList)

        inputField.value = ""
        inputField.style.backgroundColor = ""
}

function deletHandler(){
    inputField.value = ""
    inputField.style.backgroundColor = ""
}


colorBox.forEach(function(user){
    user.addEventListener("click", function(event){
        let backgroundColorStyle = event.target.style.backgroundColor
        inputField.style.backgroundColor = backgroundColorStyle
    })
})

btnDelete.addEventListener("click", deletHandler)
inputField.addEventListener("keypress", inputHandlerWord)
btnSave.addEventListener("click", clickHandlerAdd )
