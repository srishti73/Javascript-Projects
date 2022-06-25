
//breakchain animation
function breakChain(){
    let chain= document.getElementById('chain');
    chain.innerHTML="&#xf0c1;";//unicode &# and then place the unicode
    setTimeout(function(){
        chain.innerHTML="&#xf127;";
    },1000);
  }
  //call animation
  breakChain();
  setInterval(breakChain,2000);


  function chargeBattery(){
    let battery= document.getElementById('battery');
    battery.innerHTML="&#xf244;";
    setTimeout(function(){
        battery.innerHTML="&#xf243;";
    },1000);
    setTimeout(function(){
        battery.innerHTML="&#xf242;";
    },2000);
    setTimeout(function(){
        battery.innerHTML="&#xf241;";
    },3000);
    setTimeout(function(){
        battery.innerHTML="&#xf240;";
    },4000);

  }
  chargeBattery();
  //run animation every 5 seconds
  setInterval(chargeBattery, 5000);
