const cameras = {
    price : 600,
    weight : 2000,
    myDes: function()
    {
        return `This canon camera is ${this.price}`
    }
} 

console.log(cameras.myDes())

// Do not use arrow functions in methods or constructors

// This is for Redux people
//const func = () => ({key: 'value'})