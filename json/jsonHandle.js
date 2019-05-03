const student = {
    name : 'john',
    age : 23,
    isActive: true,
}

//convert this object into stringg to be stored in local storage

//obj to string
const studentObjToString = JSON.stringify(student)

console.log(typeof(studentObjToString))
//storing string in local storage
localStorage.setItem('student', studentObjToString)

// getting value from local storage
var getval = localStorage.getItem('student')
// converting  bak to obj from str
const toJSON = JSON.parse(getval)  
console.log(toJSON)
console.log(typeof toJSON)