//alert('connected')

function myvalidation()
{
    let myval = document.getElementById('myform').value;
    if(isNaN(myval) || myval < 1 || myval > 20)
    {
        console.log("not a valid input");
    }
    else{
        //console.log("This is ok");
        const myele = document.getElementById('idone')
        myele.textContent = "I am chnaged to  " + myval
    }
}

// form validation

document.querySelector('.myform').addEventListener('submit', ()=>{
    event.preventDefault();
    console.log(event.target.username.value)
    console.log(event.target.realname.value)
    event.target.username.value = ''   // this is for cleaning values in box
    event.target.realname.value = ''

})