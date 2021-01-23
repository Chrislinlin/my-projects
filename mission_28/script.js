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
        <div>Go Higher</div>
        `);

}
//check Number function
function checkNum(){

}


