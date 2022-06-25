const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');


//song titles
const songs=['hey','summer','ukulele'];
//keep a track of the song
let songIndex=2;

//load songs 
loadSong(songs[songIndex])

function loadSong(song)
{
    title.innerText= song;
    audio.src= `music/${song}.mp3`
    cover.src=`img/${song}.jpg`
}

function playSong(){
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')

  audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')

  audio.pause();
}

function prevSong(){
 
    songIndex--;
    if(songIndex<0){
        songIndex=songs.length-1;
    }
    loadSong(songs[songIndex]);

    playSong();
}
function nextSong(){
    songIndex++;
    if(songIndex>songs.length-1){
        songIndex=0;
    }
    loadSong(songs[songIndex]);

    playSong();

}


// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }

  function setProgress(e){
    const width= this.clientWidth;
    const clickX= e.offsetX;
    const duration = audio.duration

    audio.currentTime= (clickX/width) * duration
  }



//event listeners
playBtn.addEventListener('click', ()=>{
    const isPlaying= musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong();
    }
    else{
        playSong();
    }
})

//change song events

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)