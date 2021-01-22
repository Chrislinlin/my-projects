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
        //update time by 5s
        time +=5;
        updateTime()
    }
})
//Setting btn click
$('#settings-btn').click(function(){
    $('#settings').toggleClass('hide');
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
