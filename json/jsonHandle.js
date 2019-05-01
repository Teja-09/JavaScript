const student = {
    name : 'john',
    age : 23,
    isActive: true,
}

//convert this object into stringg to be stored in local storage


const studentObjToString = JSON.stringify(student)

console.log(typeof(studentObjToString))

//localStorage.setItem('student', studentObjToString)

const toJSON = JSON.parse(studentObjToString)