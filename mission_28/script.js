$('#msg')

const randomNum = getRandomNum();

console.log(getRandomNum());
function getRandomNum(){
    return Math.floor(Math.random()*100) +1;
}