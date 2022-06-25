let fact= document.querySelector('#fact');
let factText= document.querySelector('#factText');
let numberInput=document.querySelector('#numberInput');
numberInput.addEventListener('input', getfactAjax);
function getfactAjax(){
    let number= numberInput.value;
    let xhr= new XMLHttpRequest();
    xhr.open('Get',  'http://numbersapi.com/'+number);
    xhr.onload=function(){
       if(this.status==200 && number!=''){
        fact.style.display='block';
        factText.innerHTML=this.responseText;
       }
    }
    xhr.send();
}