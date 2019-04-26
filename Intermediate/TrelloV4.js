const myTodo = ['Buy Bread', 'Go to Gym', 'Record Videos']

//console.log(myTodo.indexOf('Buy Bread'))

const newTodos = [
    {
        title: 'Teja',
        isDone: false,
    }, 
    {
        title : 'goto gym',
        isDone: false,
    }, 
    {
        title: 'Record videos',
        isDone: true,
    }]

    const index = newTodos.findIndex(function(todo, index)
    {
        return todo.title === 'go to gym'
    })

    console.log(index)