const days = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun',]

// console.log(days[0])

// let say = function ()
// {
//     console.log("msg for user")

// }

// days.forEach(say)

//first param = elemnt in array
// second param = index
days.forEach(function(day, index)
{
    console.log(`starts with ${index + 1} -- ${day}`)
})