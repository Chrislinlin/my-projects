//list of words for game
const words= [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'hoghfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];

//init word
let randomWord;

//init score
let score;

//init time
let time = 10;

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




//add word to DOM
function addWordToDOM(){
    randomWord = getRandomWord()
    $('#word')
}