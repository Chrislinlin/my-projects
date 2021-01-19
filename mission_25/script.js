const playBtn = $('#play');
const prevBtn = $('#prev');
const nextBtn = $('#next');
const musicContainer = $('#music-container');
const audio = $('#audio')[0];
const cover = $('#cover')[0];
const title = $('#title')
const progressContainer = $('#progress-container')

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

//event click
playBtn.click(function(){
    const isPlaying = musicContainer.hasClass('play');
    // console.log(isPlaying);
    // console.log(musicContainer)
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
});

//play song
function playSong(){
    musicContainer.addClass('play')
    playBtn.find('i.fas').removeClass('fa-play');
    playBtn.find('i.fas').addClass('fa-pause');
    audio.play();
}


//pause song
function pauseSong(){
    musicContainer.removeClass('play')
    playBtn.find('i.fas').removeClass('fa-pause');
    playBtn.find('i.fas').addClass('fa-play');
    audio.pause();
    
}
