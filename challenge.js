let cal = function(curMark = 0, totMark)
{  
    let percentage = (curMark/totMark)*100

    let mygrade = '' 

    if(percentage >= 90)
    {
        mygrade = 'A';
    }
    else if(percentage >=80 && percentage<90)
    {
        mygrade = 'B'
    }

    return mygrade
}

let curMark = 100

let val = cal(100,100)

console.log(val)
