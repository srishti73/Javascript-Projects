//get modal elements 
var modal= document.getElementById('simple-modal');
//get modal btn
var modalBtn= document.getElementById('modal-btn');
//get close btn
var closeBtn= document.getElementsByClassName('close-btn')[0];
modalBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display='block'
}

closeBtn.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display='none'
}

//listen for outside click
window.addEventListener('click', clickOutside);
function clickOutside(e){
    if(e.target== modal){
    modal.style.display='none'
}}