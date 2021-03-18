


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

genBtn.addEventListener("click", genNum)


function genNum() {
    let numRange = []

    let minDigi = document.getElementById("min")
    let start = parseInt(minDigi.value, 10)

    let maxDigi = document.getElementById("max")
    let end = parseInt(maxDigi.value, 10)

    for (let i = start; i < end; i++) {
        numRange.push(randomNum(0, 9))
    }
    return numRange
}

console.log(genNum())

// document.body.innerText = (`${numRange}`)

// console.log(genNum())
// console.log(setNumRange(2,10))

// console.log(setNumRange(5,20))
// // console.log(`${numRange}`)
// let result = numRange.join("");
// resultDisplay.value=(`${result}`)