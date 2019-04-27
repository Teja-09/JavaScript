// const Hello = function(name)
// {
//     return 'Hey there ' + name + "!"
// }

// console.log(Hello("Teja"))

// const Hello = (name) =>
// {
//     return 'Hey there ' + name + "!"
// }

//The abouve thing can be written  as

const Hello = (name) =>'Hey there ' + name + "!"

console.log(Hello("Teja"))

const todos = [{
    title: 'Buy Bread',
    isDone: false,
},{
    title: 'Go to gym',
    isDone: true,
},{
    title:'Record Video',
    isDone: true,
}]

// const Done = todos.filter((todo) => {
//     return (todo.isDone === true &&  todo.title === 'Record Video')
// })

//the above fn is also can be written by below line
const Done = todos.filter((todo) => (todo.isDone === true &&  todo.title === 'Record Video'))


console.log(Done)