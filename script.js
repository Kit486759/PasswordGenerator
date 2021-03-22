



let minDigi = document.getElementById("min")
let maxDigi = document.getElementById("max")
let genBtn = document.getElementById("genBtn")
let resultDisplayEl = document.getElementById("resultDisplay")
let number = document.getElementById("number")
let upperCase = document.getElementById("upperCase")
let lowerCase = document.getElementById("lowerCase")
let symbol = document.getElementById("symbol")


//================= Random function with min and max for in put ASCII code 
function random(min, max) {
    // Math.floor(Math.random() * 10)
    return Math.floor(Math.random() * (max - min) + min);
}

//================= Random number function , generate by ASCII code  
function randomNum() {

    let result = String.fromCharCode(random(48, 57))
    return result;
}

console.log(`test random number "${randomNum()}"`)


//================= Random uppercase function , generate by ASCII code  
function randomUpper() {
    // take one number, say, 127 and convert it to its ASCII char representation
    let result = String.fromCharCode(random(65, 90))
    return result;
}

console.log(`test random uppercase "${randomUpper()}"`)


//================= Random lowercase function , generate by ASCII code  
function randomLower() {
    // take one number, say, 127 and convert it to its ASCII char representation
    let result = String.fromCharCode(random(97, 122))
    return result;
}

console.log(`test random lowercase "${randomLower()}"`)


//================= Random symbol function , generate array as ASCII code for symbols are seperate
function randomSymbol() {
    // take one number, say, 127 and convert it to its ASCII char representation
    const symbol = `~!@#$%^&*`

    return symbol[Math.floor(Math.random() * symbol.length)];
}

console.log(`test random symbol "${randomSymbol()}"`)



genBtn.addEventListener("click", randomType)

function randomType() {

    let resultTemp = []

    for (let i = 1; i <= parseInt(maxDigi.value, 10); i++) {
        let result = []
        if (number.checked === true) {
            // console.log(`test number checked`)
            result += randomNum()
        }

        if (upperCase.checked === true) {
            // console.log(`test upperCase checked`)
            result += randomUpper()
        }

        if (lowerCase.checked === true) {
            // console.log(`test lowerCase checked`)
            result += randomLower()
        }

        if (symbol.checked === true) {
            // console.log(`test symbol checked`)
            result += randomSymbol()
        }

        resultTemp.push(result)
    }

    // got result in number, upper, lower and symbol group like "1Aa!,2Bb@,3Cc#"
    console.log(`got result in number, upper, lower and symbol group ${resultTemp}`)

    // Join all the code into one string
    let resultTempJoin = resultTemp.join("")

    // Split the string and make it array with each word
    let resultTempSplit = resultTempJoin.split("")

    console.log(` result join and split to each by each ${resultTempSplit}`)

    // Insert the result into random loop which with target minimum number to maximum number
    let resultDisplay = []
    for (let i = 1; i <= parseInt(maxDigi.value, 10); i++) {
        resultDisplay.push(resultTempSplit[random(0, resultTempSplit.length)])
    }

    console.log(resultDisplay)

    resultDisplay.value = resultDisplay.join("")

    return resultDisplayEl.value=resultDisplay.value
}


// resultDisplay.innerHTML = (`<p>sdsd</p>`)

console.log(resultDisplayEl.value)

// function convertResult() {
//     resultDisplay
// }


