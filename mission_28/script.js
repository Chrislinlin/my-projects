$('#msg')

const randomNum = getRandomNum();

console.log("number: ",randomNum);
function getRandomNum(){
    return Math.floor(Math.random()*100) +1;
}

//speechRecognition
window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

//create object
let recognition = new window.SpeechRecognition();
//start recognition and game
recognition.start();


//capture user speak
function getSpeakWord(e){
    const msg = e.results[0][0].transcript;

    //call writeMessage//checkNum function
    writeMessage(msg);
    checkNum(msg);

}
//speak result event listener
recognition.addEventListener('result', getSpeakWord);

//write what user speaks
function writeMessage(msg){
    $('#msg').html(
        `
        <div>You said:</div>
        <span class="box">${msg}</span>
        
        `);

}
//check msg against Number function
function checkNum(msg){
const num = +msg//讓msg一定要是num

//check if valid num
if(Number.isNaN(num)){
    $('#msg').append('<div>That is not a valid number</div>');
    return
}
if(num >100 || num <1){
    $('#msg').html('<div>Number must be between 1 and 100</div>');
    return;
}
if (num === randomNum) {
    $('body').html(`
  <h2>Congrats! You have guessed the number! <br><br>
  It was ${num}</h2>
  <button class="play-again" id="play-again">Play Again</button>
`);
} else if (num > randomNum) {
    $('#msg').append('<div>GO LOWER</div>');
} else {
    $('#msg').append('<div>GO HIGHER</div>');
}
}
// ER SR service
recognition.addEventListener('end',function(){
   recognition.start(); 
})


