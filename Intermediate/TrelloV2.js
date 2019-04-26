let myTodo = 
{
    day: `Monday`,
    meetings: 20,
    meetDone: 10,
}

let addMeet = function(todo, meet = 0)
{
    todo.meetings = todo.meetings + meet
    console.log(myTodo)
}

let meetDone = function(todo, done = 0)
{
    todo.meetDone = todo.meetDone + done
    console.log(todo)
}

let resetDay = function(todo)
{
    todo.meetings = 0
    todo.meetDone = 0
    todo.day = 'Sunday'
    console.log(todo)
}

let getSummary = function(todo)
{
    let meetLeft = todo.meetings - todo.meetDone
    console.log("You have these = " + meetLeft)
}

addMeet(myTodo, 4)

meetDone(myTodo, 5)

getSummary(myTodo)

resetDay(myTodo)