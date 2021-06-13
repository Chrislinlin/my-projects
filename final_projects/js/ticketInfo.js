function initMap() {
    let Station_taipei = {
        lat: 25.0477942,
        lng: 121.514765
    }; // 台北車站的經緯度
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11, //放大的倍率
        center: Station_taipei //初始化的地圖中心位置
    });

    //--------下面是呼叫一個新marker------

    let marker = new google.maps.Marker({
        position: Station_taipei, //marker的放置位置
        map: map //這邊的map指的是第四行的map變數
    });

}