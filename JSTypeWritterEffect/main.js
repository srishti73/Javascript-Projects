const TypeWriter= function(txtElement, words, wait=3000){
    this.txtElement=txtElement;
    this.words=words;
    this.txt='';
    this.wordIndex=0;
    this.wait=parseInt(wait,10);//10 is base
    this.type();
    this.isDeleting=false;// when the typewriter is deleting this will be true
    

}

//Type Method
TypeWriter.prototype.type=function(){
    //current index of word
    const current= this.wordIndex%this.words.length;
    //get full text of current word
    const fullTxt= this.words[current];
    //check if deleting 
    if(this.isDeleting){
      //remove a char
      this.txt=fullTxt.substring(0,this.txt.length-1);
    }
    else{
        //add a char
        this.txt=fullTxt.substring(0,this.txt.length+1);
    }

    //insert tx into element
    this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`
    // initial Type Speed
    let typeSpeed=300;
    if(this.isDeleting){
        typeSpeed/=2;
    }
    //check if word is complete
    if(!this.isDeleting && this.txt===fullTxt){
        //make pause at end
        typeSpeed=this.wait;
        //set isDeleting to true
        this.isDeleting=true;

    }
    else if(this.isDeleting && this.txt===''){
        this.isDeleting=false;
        this.wordIndex++;
        //pause before new word
        typeSpeed=500;

    }
    setTimeout(()=>this.type(),typeSpeed)
}




//Init on DOM load
document.addEventListener('DOMContentLoaded',init);
//init App
function init(){
    const txtElement= document.querySelector('.txt-type');
    const words= JSON.parse(txtElement.getAttribute('data-words'));
    const wait= txtElement.getAttribute('data-wait');
    //init typeWritter
    new TypeWriter(txtElement, words,wait);
}