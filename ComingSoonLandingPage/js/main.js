const countdown= document.querySelector('.countdown');
//set a launch date
const launchdate= new Date('Dec 1, 2022 13:00:00').getTime();
//console.log(launchdate);//we get in millisec

//update every sec
const interval =setInterval(()=>{
  //GET TODAYS DATE AND TIME IS MS
  const now = new Date().getTime();

  //get distance from now to launch date 
  const distance= launchdate-now;
  
  //Time calculations
  const days= Math.floor(distance/(1000*60*60*24));
  const hours= Math.floor((distance %(1000*60*60*24)) / (1000*60*60));
  const mins= Math.floor((distance %(1000*60*60)) / (1000*60))
  const secs= Math.floor((distance %(1000*60)) / (1000))

  //display the result
  countdown.innerHTML=`
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${secs}<span>Seconds</span></div>
  `;

  if(distance<0){
    //stop countdown
    clearInterval(interval);
    //style and output text
    countdown.style.color="#17ab28";
    countdown.innerHTML="Launched!";
  }
},1000)