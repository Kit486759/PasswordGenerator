


// function RandomNumberListA(start, end) {
//     // return list of random numbers between start and end
//     let list = []
//     for (var i = start; i <= end; i++) {
//         list.push(randomNum(start, end));
//     }
//     return list;
// }
// console.log(`start from 2 ,end with 10 and random number between `, RandomNumberListA(6, 10));


let minDigi = document.getElementById("min")
let maxDigi = document.getElementById("max")
let genBtn = document.getElementById("genBtn")
let resultDisplay = document.getElementById("resultDisplay")
let number = document.getElementById("number")
let upperCase = document.getElementById("upperCase")
let lowerCase = document.getElementById("lowerCase")
let symbol = document.getElementById("symbol")


// genBtn.addEventListener("click",setNumRange)


// function setNumRange(minDigi, maxDigi) {
//     return (`${minDigi},${maxDigi}`);

// }

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

    let resultDisplay = []

    for (let i = parseInt(minDigi.value, 10); i <= parseInt(maxDigi.value, 10); i++) {

        if (number.checked === true) {
            console.log(`test number checked`)
            result += randomNum()
        }

        if (upperCase.checked === true) {
            console.log(`test upperCase checked`)
            result += randomUpper()
        }

        if (lowerCase.checked === true) {
            console.log(`test lowerCase checked`)
            result += randomLower()
        }

        if (symbol.checked === true) {
            console.log(`test symbol checked`)
            result += randomSymbol()
        }

        resultDisplay.push(result)
    }
    return console.log(resultDisplay)
}



// function genNum() {
//     let numRange = []

//     for (let i = parseInt(minDigi.value, 10); i <= parseInt(maxDigi.value, 10); i++) {
//         if (upperCase.checked !== true) {
//             numRange.push(randomNum(0, 9)), String.fromCharCode(randomUpper(65, 90))
//         }
//         else {
//             numRange.push(randomNum(0, 9))
//         }
//     }
//     return console.log(numRange.join(""))
// }


