console.log('5' + 5)

let giveType = typeof(5)

console.log(giveType)

giveType = typeof('5')

console.log(giveType)

const adder = true + 5 // true = 1
console.log(adder)

const val = false + 5 // false = 0
console.log(val)

const login = []
//getting details from DB

const loginId = login[0]
console.log(login[0])
if(loginId)
{
    console.log("Allow user to login")
}
else{
    console.log("Auth failes")
}

// values that are interpreted as false
// false
// 0
// ''
// null
//undefined