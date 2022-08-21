let schemeSelected = document.getElementById("scheme-input").value
let colourInput = document.getElementById("colour-input").value
let getColourBtn = document.getElementById("get-colour-btn")
let hex = colourInput.substring(1)





fetch("https://www.thecolorapi.com")

    .then(res => res.json())
    .then(data => console.log(data))