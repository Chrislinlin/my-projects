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

//get random word
function getRandomWord(){
    return words[Math.floor(Math.random()* words.length)]
}
console.log(getRandomWord())