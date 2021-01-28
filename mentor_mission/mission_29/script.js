//創造變數，得知現在是幾年
const currentYear = new Date().getFullYear();
// console.log(currentYear);
//
const countDownTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
//  console.log(countDownTime)
function remainTime(){
    const timeNow = new Date();
    // console.log(timeNow)
    const remain = countDownTime - timeNow;//得到的是毫秒
    // console.log(remain)
    //定義remain的剩下幾天幾時幾分幾秒

    const sec = Math.floor(remain/1000)%60;
    const min = Math.floor(remain/1000/60)%60;
    const hour = Math.floor(remain/1000/60/60)%24;
    const day = Math.floor(remain/1000/60/60/24);
    
    $('#days').text(timeExpress(day));
    $('#hours').text(timeExpress(hour));
    $('#minutes').text(timeExpress(min));
    $('#seconds').text(timeExpress(sec));
    
   
}

function timeExpress(time){
    return time <10 ? `0${time}` :time;
}

const timeinterval = setInterval(function(){
    var t = countDownTime - (new Date());
    // console.log(t)
    if(t<0){
        clearInterval(timeinterval);
    }else{
        remainTime()
    }
},1000);

