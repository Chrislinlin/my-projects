//list of words for game
// const words= [
//     'sigh',
//     'tense',
//     'airplane',
//     'ball',
//     'pies',
//     'juice',
//     'warlike',
//     'bad',
//     'north',
//     'dependent',
//     'steer',
//     'silver',
//     'hoghfalutin',
//     'superficial',
//     'quince',
//     'eight',
//     'feeble',
//     'admit',
//     'drag',
//     'loving'
// ];

//init word
let randomWord;

//init score
let score =0;

//init time
let time = 10;

//設定困難度是由設定在localstorage的困難度還是'medium'
// let difficulty = 'medium';
let difficulty = localStorage.getItem('difficulty') !==null? localStorage.getItem('difficulty') : 'medium';

//set difficulty select value
$('#difficulty').val(localStorage.getItem('difficulty') !==null? localStorage.getItem('difficulty') : 'medium');

//當畫面reload，滑鼠游標自動帶到input
$('#text').focus();

// //get random word 
// function getRandomWord(){
//     return words[Math.floor(Math.random()* words.length)]
// }
// // console.log(getRandomWord())

//get word by API
RandomWord()
function RandomWord() {
    $.ajax({
        method: "get",
        url: 'https://random-word-api.herokuapp.com/word?number=1',
        dataType: "json",
        success: function (data) {
            $('h1').text(data);
          }  
    });
}


//Typing event listener
$('#text').on('input',function(e){
    const insertText = $(e.target).val();
    // console.log(insertText)
    let randomWord = $('h1').text();
    if(insertText == randomWord ){
        // console.log("yes!")
        RandomWord();

        //update the score
        updateScore()
        function updateScore(){
        score++;
        $('#score').text(score);
        }
        //每打完一個字，clear input
        $(e.target).val('');
        //set the difficulty level by time
        if(difficulty === 'hard'){
            time +=2;
        }else if(difficulty === 'medium'){
            time +=4;
        }else{
            time +=6;
        }
      
        updateTime()
    }
})
//Setting btn click event
//有設定css 屬性transform: translateY(-100)
$('#settings-btn').click(function(){
    $('#settings').toggleClass('hide');
})

//setting select
$('#settings-form').change(function(e){
    difficulty = $(e.target).val()
    // console.log(difficulty)
    localStorage.setItem('difficulty',difficulty)
})

//start counting down
const timeInterval = setInterval(updateTime, 1000);

//update time 
function updateTime(){
    time--;
    $('#time').text(time + 's');

    if(time === 0){
        clearInterval(timeInterval);
        gameOver();
    }
}
//gameOver , show end screen
function gameOver(){
    $('#end-game-container').html(`
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick= "location.reload()">Reload</button>
    `).css('display','flex');
}
