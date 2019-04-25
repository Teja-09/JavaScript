const todo = []

// storing  values from first i.e from first to last
todo.push('teja')
todo.push('ram')
todo.push('raj')

todo.forEach(function(todo, index)
{
    console.log("val = " + todo + " and index = " + index)
})

//now starting from last to first

let todo1 = []

todo1.unshift('ravi')
todo1.unshift('raj')
todo1.unshift('ram')

console.log(todo1)

for(let i = 0;i < todo1.length;i++)
{
   console.log(todo1[i])
}