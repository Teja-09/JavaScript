const convertTors = (dollar)=> { 
    if(typeof dollar === 'number')
    {
        return dollar * 60
    }
    else
    {
        throw Error('Amount needs to be in number')
    }    
}



try {
    let val = convertTors('name')
    console.log(val)

} catch (error) {
    console.log(error)
}

console.log("I am after this")
