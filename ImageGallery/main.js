const current= document.querySelector('#current');
const imgs =document.querySelectorAll('.imgs img');
const opacity= 0.6;

//set first img opacity
imgs[0].style.opacity=opacity;

imgs.forEach(img => 
    img.addEventListener('click', imgclick)
);

function imgclick(e){
    //reset opacity of all images
    imgs.forEach(img=>(img.style.opacity=1));
    //change current img to src of clicked image
    current.src=e.target.src;
    //add fade in class
    current.classList.add('fade-in');
    //set timeout and remove class fadein after .5sec
    setTimeout(()=> current.classList.remove('fade-in'),500);

    //change opacity to opacity var
    e.target.style.opacity=opacity;
}



