var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem)
function removeItem(e){
  if(e.target.classList.contains('delete')){
      if(confirm('Are you sure')){
          var li= e.target.parentElement;
          itemList.removeChild(li);
      }
  }

}

//add item
function addItem(e){
    e.preventDefault();
    //get input value
    var newItem= document.getElementById('item').value;
    //create new li element
    var li= document.createElement('li');
    li.className="list-group-item";

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create del button
    var deleteBtn = document.createElement('button');
    //add classes to deletebtn
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'))
   //append button to li
    li.append(deleteBtn);
    //appenf li to list
    itemList.appendChild(li);

}

var filter= document.getElementById('filter');
filter.addEventListener('keyup', filteritems);

//filter items
function filteritems(e){
    //convert to lowercase
    var text= e.target.value.toLowerCase();
    //get lists
    var items= itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        var itemname= item.firstChild.textContent;

        //search among listed names if char matches only then the corresponding item remains displayed
        if(itemname.toLowerCase().indexOf(text!=-1)){
            item.style.display='block'

        }
        else{
            item.style.display='none'
        }
    });
    
}