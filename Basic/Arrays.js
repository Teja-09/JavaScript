//console.log()

const constArray = [1,2,3,'teja',true] // constant array

let superH = ['ram', 1, 2, 3, true]  // array 

console.log(superH)
console.log()

console.log("Element in index 3 is = " + superH[3])

console.log("Length of the array is = " + superH.length);

console.log("Last element in array is = " + superH[superH.length - 1])

console.log("We have " + superH.length + " super Heros")

// this can also be written as 

console.log(`we have ${superH.length} suepr heros`)

superH[2] = "teja"

console.log("The changed array is = " + superH)