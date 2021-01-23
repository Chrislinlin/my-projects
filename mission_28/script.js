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
    // console.log(e)
    const msg = e.results[0][0].transcript;
    console.log(msg)
}
//speak result event listener
recognition.addEventListener('result', getSpeakWord);


