//alert('File is attached')

//document.title = 'i am changing';

// console.log(document.getElementById('idone'))

// console.log(document.getElementsByClassName('classone'))


// for printing all the tags starts with that selector
// for selecting class, pass '.classname'
// for selecting id, pass '#idname'
// const myElement = document.querySelectorAll('p')
// console.log(myElement)


// for chanaging first p tag
// const myPElements = document.querySelector('p')
// myPElements.textContent = 'I am being changed using js'


//chanding all by loop
const myPElements = document.querySelectorAll('p')
myPElements.forEach(function(p)
{
    p.textContent = 'I am changed in loop'
})

const createPara = document.createElement('p')
createPara.textContent = 'I was added by js'

document.querySelector('body').appendChild(createPara)