window.addEventListener('load',init);//when window loads then init func fires

//globals

//available levels
const levels={
    easy:5,
    medium:3,
    hard:2
}
const currentLevel=levels.easy;
let time =currentLevel;//let as this time will keep on changing
let score=0;
let isPlaying;//if game is going on or not 

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');//word that shoes
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');//if correct or gameover
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

//init game
function init(){
    //show number of seconds in UI
    seconds.innerHTML=currentLevel;
    //load word from array
    showWord(words);
    //start matching on word input
    wordInput.addEventListener('input', startMatch);
    //call countdown every second
    setInterval(countdown, 1000);
    //check status of game
    setInterval(checkStatus, 50);
}
//start match
function startMatch(){
    if(matchWords()){
      isPlaying=true;
      time=currentLevel+1;
      showWord(words);
      wordInput.value='';
      score++;
    }
    if(score===-1){
        scoreDisplay.innerHTML=0;
    }else{
   
    scoreDisplay.innerHTML=score;     
    }
}
//match current word to wordinput
function matchWords(){
    if(wordInput.value===currentWord .innerHTML){
        message.innerHTML='correct';
        return true;
      }else{
        message.innerHTML='';
        return false
      }
}

//pick & show random word
function showWord(words){
    //generate a random array index
    const randIndex= Math.floor(Math.random()*words.length)
    //output random word
    currentWord.innerHTML= words[randIndex];
}

//countdown timer
function countdown(){
    //check is time has run out
    if(time>0){
       //decrement the time
       time--;
       
    } else if( time===0 ){
        //game over
        isPlaying=false;
    }
    //show time 
    timeDisplay.innerHTML=time;
}

//check status
function checkStatus(){
    if(!isPlaying && time===0){
      message.innerHTML='Game Over!';
      score=-1;

    }
}



