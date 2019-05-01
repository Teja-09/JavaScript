localStorage.setItem('hero', 'thor')
localStorage.setItem('Todo', 'Buy Ice Tea')
var myhero = localStorage.getItem('hero')

console.log(localStorage.getItem('Todo'))

localStorage.setItem('Todo', 'Have Fun')


localStorage.removeItem('hero')