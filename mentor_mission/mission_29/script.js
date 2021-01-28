//創造變數，得知現在是幾年
const currentYear = new Date().getFullYear();
console.log(currentYear);
//
const countDownTime = new Date(`January 01 ${ currentYear + 1} 00:00:00`);
// console.log(countDownTime)
function remainTime(){
    const timeNow = new Date();
    // console.log(timeNow)
    const remain = countDownTime - timeNow;
    // console.log(remain)
   
}
remainTime()
