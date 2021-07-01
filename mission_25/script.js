$(function(){
const playBtn = $('#play');
const prevBtn = $('#prev');
const nextBtn = $('#next');
const musicContainer = $('#music-container');
const audio = $('#audio')[0];
const cover = $('#cover')[0];
const bgCover = $('#bg-cover')[0];
const title = $('#title')
const artist = $('#artist')
const volumnslider = $('#volumnslider');
const progressContainer = $('#progress-container')

// Song titles
const songs = ['Leave the door open','愛人錯過','NATSUMONOGATARI'];
const songsArtists = ['Bruno Mars','告五人','柚子'];
//因為是三首歌所以song index為2
let songIndex = 2;


//load song into DOM
loadSong(songs[songIndex], songsArtists[songIndex])
//songs[0] -> hey
//songs[1] -> summer
//songs[2] -> ukulele

function loadSong(song,a){
    title.text(song);
    console.log(song)
    artist.text(a);
    console.log(a)
    // console.log(title.text)
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
    bgCover.src = `images/${song}.jpg`;
    
}

//event play/ pause click
playBtn.click(function(){
    const isPlaying = musicContainer.hasClass('play');
    console.log(isPlaying);
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
// prev/ nextSong() click event
prevBtn.click(function(){
    prevSong();
})
nextBtn.click(function(){
    nextSong();
})
function prevSong(){
    songIndex--;
    console.log(songIndex)
    //不然index會一直小下去但原本的index只有 0,1,2
    if(songIndex< 0){
        songIndex = songs.length -1
    }
    loadSong(songs[songIndex], songsArtists[songIndex]);
    playSong()

}
function nextSong(){
    songIndex++;
    if(songIndex> songs.length -1){//因為songIndex為2，但長度為3
        songIndex = 0 //當他大於的時候就回到第一首;
    }
    loadSong(songs[songIndex], songsArtists[songIndex]);
    playSong();
    console.log(songIndex)

}



//progressBar click event
progressContainer.click(function(e){
    setProgress(e);
    
})
volumnslider.change(function(){
    console.log('3sss');
    setvolume()
})
function setProgress(e){
    const width = $('#progress-container').width(); 
    console.log(width);
    //指滑鼠點擊到進度條上的位置
    const offsetX = $(e.target).offset().left;
    // console.log(clickX);
    const totalX = e.pageX 
    //音樂總時間
    const duration = audio.duration;
    const percent = ((totalX -offsetX)/duration);
 
    $('#audio')[0].currentTime = percent * duration

    // audio.currentTimePercent = (clickX/width) ;
}
//調整音量大小
function setvolume(){
    let result = volumnslider.val();
    console.log(result);
    audio.volume = result /100;
    // let vo = volumnslider.value;
    // console.log(vo)

}


// timeupdate event 
$('#audio').on('timeupdate', function() {
    const duration = $('#audio')[0].duration
    const currentTime = $('#audio')[0].currentTime
    const progressPercent = (currentTime / duration) * 100;
    $('#progress').css('width', `${progressPercent}%`)
})

//進度條點哪去哪的點擊事件
progressContainer.click(function(){
    setProgress()
})
// end song
$('#audio').on('ended', function() {
    nextSong();
})

})