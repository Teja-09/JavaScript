const number = [1,2,3,4]

console.log("orginal array is = " + number)

//starting 

//for shift first element will be removed and returned
let snum = number.shift()
console.log("shifted number is = " +snum)
console.log("After shifting array is " + number) 

// unhift is used for adding element at the first
number.unshift('addMe')
console.log("after unshifting : ")
console.log(number)

//end of array

//  pop(), last element will be removed and returned 
let poped = number.pop()
console.log("poped element is =  " + poped)

console.log("after poping : ")
console.log(number)

// push(), will be used for addding element at the last
number.push("Teja")
console.log(number)

//middle of the array

number.splice(2, 3, 'something')
console.log(number)