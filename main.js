let colourInput = document.getElementById("colour-input")
let schemeInput = document.getElementById("scheme-input")
let colourSelected = colourInput.value
let schemeSelected = schemeInput.value
const colourButton = document.getElementById("colour-button")

// Need to remove # from hex code:

// noHashHex = colourSelected.substring(1)
// console.log(noHashHex)

// Event listener
colourButton.addEventListener("click", function(){
    let colourSelected = colourInput.value
    let schemeSelected = schemeInput.value
    // Need to remove # from hex code
    noHashHex = noHashHex = colourSelected.substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${noHashHex}&mode=${schemeSelected}&count=5`)
    .then(res => res.json())
    .then(color => {
        // console.log(color)
        let hexOne = color.colors[0].hex.value
        let hexTwo = color.colors[1].hex.value
        let hexThree = color.colors[2].hex.value
        let hexFour = color.colors[3].hex.value
        let hexFive = color.colors[4].hex.value
        
        // Just to check:
        // console.log(hexOne, hexTwo, hexThree, hexFour, hexFive)
        
        // Background colours
        document.getElementById("cl-1").style.backgroundColor = hexOne
        document.getElementById("cl-2").style.backgroundColor = hexTwo
        document.getElementById("cl-3").style.backgroundColor = hexThree
        document.getElementById("cl-4").style.backgroundColor = hexFour
        document.getElementById("cl-5").style.backgroundColor = hexFive
        
        // Hex codes
        document.getElementById("hex-1").innerHTML = `<p>${hexOne}</p>`
        document.getElementById("hex-2").innerHTML = `<p>${hexTwo}</p>`
        document.getElementById("hex-3").innerHTML = `<p>${hexThree}</p>`
        document.getElementById("hex-4").innerHTML = `<p>${hexFour}</p>`
        document.getElementById("hex-5").innerHTML = `<p>${hexFive}</p>`
        })
})
