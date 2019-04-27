var john = {
    name: 'I am john',
    age : 23,
    isActive: true,
}

var marry = 
{
    name : 'i Am marry',
    age : 23,
    isActive: true,
}

var sam = 
{
    name : 'i Am sam',
    age : 29,
    isActive: false,
}

let users = new Map()

users.set('first',john)
users.set('second',marry)
users.set('third',sam)

console.log(users)
console.log("size of map = " + users.size)


console.log(users.get('first'))

console.log("The keys are : ")
console.log(users.keys())

console.log(users.values())

//Iterating
for (const key of users.keys()) {
    console.log(key)
}
console.log()
for (const key of users.values()) {
    console.log(key)
}

for (const [key, value] of users.entries()) {
    console.log(key + " = "+ value.name)
}

console.log()

//users.forEach(value, key) => console.log(key + ' = ' + value.name)