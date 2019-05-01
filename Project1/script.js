// var h = document.createElement('h1')
// var myval = document.createTextNode('Hello World')
// h.appendChild(myval)                                         //create and append 
// document.querySelector('h1').appendChild(h);


var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)


function addItem()
{
    var input = document.getElementById('input')
    var item = input.value;
    var textnode = document.createTextNode(item)

    if(item === ' ')
    {
        return false;
        alert("Enter text")
    }
    else{
        // create li
        li = document.createElement('li');
        
        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create label
        var label = document.createElement('label')
        

        //add these element on web page
        ul.append(li);
        li.appendChild(checkbox);
        li.appendChild(label);
        label.appendChild(textnode);
        ul.insertBefore(li, ul.childNodes[0]);
       
        setTimeout(() => {
            li.className = 'visual';
        }, 5);
        
        input.value = " ";
    }

}

 
function removeItem()
{
    li = ul.children
    for(let index = 0;index<li.length;index++)
    {
        while(li[index] && li[index].children[0].checked)
        {
            ul.removeChild(li[index]);
        }

    }
}
