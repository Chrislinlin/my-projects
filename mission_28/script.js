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
