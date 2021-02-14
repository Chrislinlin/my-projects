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
        todayWeather();
        selectCity(city);
    }
})
function todayWeather(){
    // console.log(123)
    $('#weatherNow').html('');
    
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
    console.log(city);

}
$('#select').click(function() {
    console.log(123)
    cityIndex = $('#select :selected').val()
});
