



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


    let resultrandomNum = []
    let resultrandomUpper = []
    let resultrandomLower = []
    let resultrandomSymbol = []
    for (let i = 1; i <= parseInt(maxDigi.value, 10); i++) {


        if (number.checked === true) {
            // console.log(`test number checked`)
            resultrandomNum += randomNum()
        }

        if (upperCase.checked === true) {
            // console.log(`test upperCase checked`)
            resultrandomUpper += randomUpper()
        }

        if (lowerCase.checked === true) {
            // console.log(`test lowerCase checked`)
            resultrandomLower += randomLower()
        }

        if (symbol.checked === true) {
            // console.log(`test symbol checked`)
            resultrandomSymbol += randomSymbol()
        }

        // resultTemp.push(result)

    }
    console.log(resultrandomNum)
    console.log(resultrandomUpper)
    console.log(resultrandomLower)
    console.log(resultrandomSymbol)

    let resultTemp = []

    // Loop and push, make sure atleast contain 1 chosen element in the result
    for (let i = 1; i <= parseInt(maxDigi.value, 10); i++) {

        if (number.checked === true && resultTemp.length < maxDigi.value) {
            // console.log(`test number checked`)
            resultTemp.push(resultrandomNum[random(1, maxDigi.value)])
        }

        if (number.checked === true && resultTemp.length < maxDigi.value) {
            // console.log(`test number checked`)
            resultTemp.push(resultrandomUpper[random(1, maxDigi.value)])
        }

        if (number.checked === true && resultTemp.length < maxDigi.value) {
            // console.log(`test number checked`)
            resultTemp.push(resultrandomLower[random(1, maxDigi.value)])
        }

        if (number.checked === true && resultTemp.length < maxDigi.value) {
            // console.log(`test number checked`)
            resultTemp.push(resultrandomSymbol[random(1, maxDigi.value)])
        }

    }

    // shuffle the result
    shuffle(resultTemp)
    console.log(resultTemp)

    // convert result to string and display in HTML
    resultDisplay.value = resultTemp.join("")
    return resultDisplayEl.value=resultDisplay.value
}

// Shuffle function for the result
function shuffle(arr) {

    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return;
}

