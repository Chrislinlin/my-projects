let data;
let city;
let cityNum = 0;

$.ajax({
    url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-373C6328-6BF2-41B3-BB3B-147802B82875&format=JSON&locationName=&elementName=&sort=time',
    method: "GET",
    datatype:"json",
    success: function(res){
        data = res.records.locations[0];
        // console.log(data);
        city = data.location;
        // console.log(city);
        todayWeather(data, cityNum);
        selectCity(city);
        weekWeather(data, cityNum);
    }
})
function todayWeather(data, cityNum){
    // console.log(123)
    $('#weatherNow').html('');
    chooseCity = data.location[cityNum].locationName
    // console.log(chooseCity);
    todayDate = new Date().toString().split("GMT")[0];
   
    let weather = data.location[cityNum].weatherElement;
    weatherDescription = weather[6].time[0].elementValue[0].value;
    let weatherTemp  = data.location[cityNum].weatherElement[1].time[0].elementValue[0].value;
    let weatherImg = changeImg(weatherDescription);
    

    $('.weather_now').html(`
    <h1>${chooseCity}</h1>
    <h2>${todayDate}</h2>
    ${weatherImg}
    <div class="now-description">${weatherDescription}</div>
    <p>溫度: ${weatherTemp} °C</p>
    `)
    
}
function weekWeather(data, ){
    $('#week').html('');
    let oneWeek =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let weekDay =[]
    for (i = 1; i < 7; i++) {
        let timeIndex = 2 * i;
        let day = $('<div></div>').attr('class', `day-${i}`);
        nextWeekNum = new Date().getDay()+1;
        let weather = data.location[0].weatherElement;
    
        weatherDescription = weather[6].time[timeIndex].elementValue[0].value;
        let weatherTemp  = data.location[cityNum].weatherElement[1].time[timeIndex].elementValue[0].value;
        let weatherImg = changeImg(weatherDescription);

        const rainyPercent = `${weather[0].time[timeIndex].elementValue[0].value}`


    day.html(`
        <h3>${oneWeek[i]}</h3>
        ${weatherImg}
        <div class="week-description">${weatherDescription}</div>
        <p>溫度: ${weatherTemp} °C</p>

    `);
    $('#week').append(day);
    }

}
function selectCity(data){
    const $ = document.querySelector.bind(document);
    let select = $('select'); 
    for(let i =0;i< data.length;i++){
        city = data[i].locationName;
        let value =i;
        select.innerHTML += `
        <option value="${value}">${city}</option>
    `;
    }
    // console.log(city);

}

function changeImg(weatherDescription){
    if(weatherDescription === '多雲時晴' || weatherDescription === '晴時多雲' ){
        return '<img src="./img/sun.png" alt="sun-cloudy">'
    }else if(weatherDescription === '多雲' || weatherDescription === '陰時多雲' || weatherDescription === '多雲時陰'){
        return '<img src="./img/cloudy.png" alt="cloudy">'
    }else{
        return '<img src="./img/drop.png" alt="rainy">'
    }
    
}
$('#select').change(function() {
    // console.log(123)
    cityNum = $('#select :selected').val();
    todayWeather(data, cityNum);
    weekWeather(data, cityNum);
});
