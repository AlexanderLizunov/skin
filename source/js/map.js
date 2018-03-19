//
// var markersData = [
//     {
//         lat: 55.703167,
//         lng: 37.506159,  // Долгота
//         name: 'Студия загара «Кожа»',
//         email: 'E-MAIL: solyary.skin@yandex.ru',
//         address:"АДРЕС: Москова Мичуринский проспект 16. Вход с ул. Столетова ",
//         tel:'ТЕЛ: +7(495)203-55-66',
//         time:'ВРЕМЯ РАБОТЫ: 10:00-22:00'
//     }
//     // {
//     //     lat: 55.162729,
//     //     lng: 61.412844,
//     //     name: "Tonusclub",
//     //     address:"ул. Коммуны, 35"
//     // },
//     // {
//     //     lat: 51.772523,
//     //     lng: 55.181434,
//     //     name: "Tonusclub",
//     //     address:"УЛ. ГАГАРИНА, 27/6"
//     // }
// ];
//
//
//
// var map, infoWindow;
//
// function initMap() {
//     var centerLatLng = new google.maps.LatLng(55.703167, 37.506159);
//     var mapOptions = {
//         center: centerLatLng,
//         zoom: 14
//     };
//
//     map = new google.maps.Map(document.getElementById("map"), mapOptions);
//
//     // Создаем объект информационного окна и помещаем его в переменную infoWindow
//     // Так как у каждого информационного окна свое содержимое, то создаем пустой объект, без передачи ему параметра content
//     infoWindow = new google.maps.InfoWindow();
//
//     // Отслеживаем клик в любом месте карты
//     google.maps.event.addListener(map, "click", function() {
//         // infoWindow.close - закрываем информационное окно.
//         infoWindow.close();
//     });
//
//     // Перебираем в цикле все координата хранящиеся в markersData
//     for (var i = 0; i < markersData.length; i++){
//
//         var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
//         var name = markersData[i].name;
//         var address = markersData[i].address;
//         var email = markersData[i].email;
//         var tel = markersData[i].tel;
//         var time = markersData[i].time;
//
//         // Добавляем маркер с информационным окном
//         addMarker(latLng, name, address, email, tel, time);
//
//     }
//
// }
// // google.maps.event.addDomListener(window, "load", initMap);
//
// // Функция добавления маркера с информационным окном
// function addMarker(latLng, name, address,email, tel, time) {
//     var marker = new google.maps.Marker({
//         position: latLng,
//         map: map,
//         title: name,
//         icon: 'img/images/pointer.png',
//         animation: google.maps.Animation.BOUNCE
//     });
//
//     // Отслеживаем клик по нашему маркеру
//     google.maps.event.addListener(marker, "click", function() {
//
//         // contentString - это переменная в которой хранится содержимое информационного окна.
//         var contentString = '<div class="infowindow">' +
//             '<h3>' + name + '</h3>' +
//             '<p>' + address + '</p>' +
//             '<p>' + email + '</p>' +
//             '<p>' + tel + '</p>' +
//             '<p>' + time + '</p>' +
//             '</div>';
//
//         // Меняем содержимое информационного окна
//         infoWindow.setContent(contentString);
//
//         // Показываем информационное окно
//         infoWindow.open(map, marker);
//     });
// }
//
//
// $(window).resize(function () {
//     initMap()
// });


// lat: 55.703167,
//         lng: 37.506159,  // Долгота
//         name: 'Студия загара «Кожа»',
//         email: 'E-MAIL: solyary.skin@yandex.ru',
//         address:"АДРЕС: Москова Мичуринский проспект 16. Вход с ул. Столетова ",
//         tel:'ТЕЛ: +7(495)203-55-66',
//         time:'ВРЕМЯ РАБОТЫ: 10:00-22:00'

window.initMap = function () {
    var pointer = new google.maps.LatLng(55.703167, 37.506159),
        center = new google.maps.LatLng(55.703167, 37.506159);

    var styles = [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#444444"}]
    }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{"visibility": "on"}]
    }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{"saturation": -100}, {"lightness": 45}]
    }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{"visibility": "simplified"}]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
    }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{"color": "#adadad"}, {"visibility": "on"}]
    }];
    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

    var mapSettings = {
        center: center,
        scrollwheel: false,
        zoom: 16,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        streetViewControl: false
    };

    var map = new google.maps.Map(document.getElementById('map'), mapSettings);

    var marker = new google.maps.Marker({
        icon: 'img/images/pointer.png',
        position: pointer,
        map: map,
        title: "We are here!",
        // animation: google.maps.Animation.BOUNCE
    });

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var contentString = ' <div class="location-block">' +
        '<div class="location-item">' +
        '<p> Студия загара «Кожа»</p>' +
        '</div>' +
        '<div class="location-item">' +
        '<p><span>E-MAIL:</span> solyary.skin@yandex.ru</p>' +
        '</div>' +
        '<div class="location-item">' +
        '<p><span>АДРЕС:</span>пр. Мичуринский 16. Вход с ул. Столетова</p>' +
        '</div>' +
        '<div class="location-item">' +
        '<p><span>ТЕЛ:</span>+7 499 346 85 35</p>' +
        '</div>' +
        '<div class="location-item">' +
        '<p><span>ВРЕМЯ РАБОТЫ:</span> 10:00-22:00</p>' +
        '</div>' ;

    var infowindow = new google.maps.InfoWindow({
        content: contentString

    });
    infowindow.open(map, marker);
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    google.maps.event.addListener(map, "click", function (event) {
        infowindow.close();
    });
}

$(document).ready(function () {

    initMap()
});


$(window).resize(function () {
    initMap()
});
