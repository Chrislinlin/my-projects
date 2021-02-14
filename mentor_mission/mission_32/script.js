let data;
let city;

$.ajax({
    url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-373C6328-6BF2-41B3-BB3B-147802B82875&format=JSON&locationName=&elementName=&sort=time',
    method: "GET",
    datatype:"json",
    success: function(res){
        data = res.records.locations[0];
        // console.log(data);
        city = data.location;
        // console.log(city);
        todayWeather(data);
        selectCity(city);
    }
})
function todayWeather(data){
    // console.log(123)
    $('#weatherNow').html('');
    chooseCity = data.location[0].locationName
    // console.log(chooseCity);
    todayDate = new Date().toString().split("GMT")[0];
   
    const weather = data.location[0].weatherElement;
    todayWeather = weather[6].time[0].elementValue[0].value;
    let weatherImg = changeImg(todayWeather);
    

    $('.weather_now').html(`
    <h1>${chooseCity}</h1>
    <h2>${todayDate}</h2>
    ${weatherImg}
    <div class="now-description">${todayWeather}</div>

    `)
    
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

function changeImg(){
    if(todayWeather === '多雲時晴'){
        return '<img src="./img/sun.png" alt="sun-cloudy">'
    }
}
$('#select').click(function() {
    // console.log(123)
    cityIndex = $('#select :selected').val()
});
