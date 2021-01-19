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
//因為是三首歌所以song index為2
let songIndex = 2;


//load song into DOM
loadSong(songs[songIndex])
//songs[0] -> hey
//songs[1] -> summer
//songs[2] -> ukulele

function loadSong(song){
    title.text(song);
    console.log(title.text)
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

//event play/ pause click
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

//event prevSong click
prevBtn.click(function(){
    prevSong();
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
