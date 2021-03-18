


// function RandomNumberListA(start, end) {
//     // return list of random numbers between start and end
//     let list = []
//     for (var i = start; i <= end; i++) {
//         list.push(randomNum(start, end));
//     }
//     return list;
// }
// console.log(`start from 2 ,end with 10 and random number between `, RandomNumberListA(6, 10));


// let minDigi = document.getElementById("min")
// let maxDigi = document.getElementById("max")
let genBtn = document.getElementById("genBtn")
let resultDisplay = document.getElementById("resultDisplay")


// genBtn.addEventListener("click",setNumRange)


// function setNumRange(minDigi, maxDigi) {
//     return (`${minDigi},${maxDigi}`);

// }


function randomNum(min, max) {
    // Math.floor(Math.random() * 10)
    return Math.floor(Math.random() * (max - min) + min);
}

function ASCIINumberToChar() {
    // take one number, say, 127 and convert it to its ASCII char representation
    let result = String.fromCharCode(randomUpper(65, 90))
    return result;
}


function randomUpper(min, max) {
    // Math.floor(Math.random() * 10)
    return Math.floor(Math.random() * (max - min) + min);
}

genBtn.addEventListener("click", genNum)

let minDigi = document.getElementById("min")
let maxDigi = document.getElementById("max")
let upperCase = document.getElementById("upperCase")

function genNum() {
    let numRange = []

    for (let i = parseInt(minDigi.value, 10); i <= parseInt(maxDigi.value, 10); i++) {
        if (upperCase.checked !== true) {
            numRange.push(randomNum(0, 9)), String.fromCharCode(randomUpper(65, 90))
        }
        else {
            numRange.push(randomNum(0, 9))
        }
    }
    return console.log(numRange.join(""))
}

// genNum()
// 
// document.body.innerText = (`${numRange}`)
function check() {
    if (upperCase.checked === true) {
        return console.log(`upperCase checked`)
    }else{
        return console.log(`upperCase not checked`)
    }
}

console.log(check())
// console.log(setNumRange(2,10))

// console.log(setNumRange(5,20))
// // console.log(`${numRange}`)
// let result = numRange.join("");
// resultDisplay.value=(`${result}`)