let say = function (name)
{
    console.log("msg for user")
    console.log("hey " + name)

}

say("teja");


let fullname = function(fname, lname)
{
    console.log("welcome to lco ")
    console.log("happy to have u, " + fname + " " + lname)
}

fullname("krish", "teja")

//add function with 2 parameters
let adder = function(n1,n2)
{
    let add = n1 + n2
    return add
}

let val = adder(2,3)
console.log("added val = " + val)

// ul function with 2 paramanets
let mul = function(n1,n2)
{
    return n1*n2
}

let v = mul(2,3)
console.log(`mul val = ${v}`)

// default values can be given to the attributes
let  guestUser = function(name = 'noName', coursecount = 0)
{
    return 'Hello ' + name + ' and ur course count is : ' + coursecount
}

console.log(guestUser('ram'))