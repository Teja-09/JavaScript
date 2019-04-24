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

let adder = function(n1,n2)
{
    let add = n1 + n2
    return add
}

let val = adder(2,3)
console.log("added val = " + val)