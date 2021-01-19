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

//play song
playBtn.click(function playSong(){
    audio.play()
});

