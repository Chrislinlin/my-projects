let data;
$.ajax({
    url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-373C6328-6BF2-41B3-BB3B-147802B82875&format=JSON&locationName=&elementName=&sort=time',
    method: "GET",
    datatype:"json",
    success: function(res){
        data = res.records.locations[0];
        // console.log(data);
        let city = data.location;
        // console.log(city);
        todayWeather();
    }
})
