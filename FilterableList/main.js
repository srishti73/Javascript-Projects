//get input element

let filterInput=document.getElementById('filter-Input');
filterInput.addEventListener('keyup',filterNames);
function filterNames(){
    console.log(1);
    //get value of input
    let filterValue= document.getElementById('filter-Input').value.toUpperCase();
    //get names ul
    let ul= document.getElementById('names');
    //get li from ul
    let li=ul.querySelectorAll('li.collection-item');
    
    //loop through collection item lis
    for(let i=0;i<li.length;i++){
       let a = li[i].getElementsByTagName('a')[0];
       //if matched
       if(a.innerHTML.toUpperCase().indexOf(filterValue)> -1){//inner html grabs whatever is in the a tag -1 means match
          li[i].style.display='';
       }
       else{
        li[i].style.display='none';
       }
         
    }

}


