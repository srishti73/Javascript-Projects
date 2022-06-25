
const container= document.querySelector('.container');
const text= document.getElementById('text');

const totaltime= 7500;
const breatheTime= (totaltime/5)*2;
const hold= (totaltime/5);
breatheAnimation();


function breatheAnimation(){
    text.innerHTML='Breathe In!';
    container.className= 'container grow';

    setTimeout(()=>{
      text.innerText='Hold';
      setTimeout(()=>{
       text.innerText='Breathe Out!';
       container.className='container shrink';//adds class shrink
      },hold)
    },breatheTime)
}

setInterval(breatheAnimation, totaltime);//runs func every 3 sec


