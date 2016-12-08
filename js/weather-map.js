/**
 * Created by Irby on 12/7/16.
 */
(function () {
    "use strict";

    // initial map options
    var mapOptions = {
        // map initial zoom level
        zoom: 15,
        // map initial lat/long coordinates
        center: {
            lat: 29.9475997,
            lng: -90.0634236
        },
        mapTypeId: "roadmap"
    };


    // render mapMain
    var map = new google.maps.Map(document.getElementById("mapMain"), mapOptions);
    var marker = new google.maps.Marker({
        map: map,
        position: mapOptions.center,
        draggable: true
    });

    function populateForecast(object, i) {
        var day = moment.unix(object.dt);

        return "<div class='col-lg-4 pretty'>"
            + "<h5>Day " + (i + 1) + ": " + day.format("dddd, MMM-Do-YYYY") + "</h5>"
            + "<h4>" + object.temp.max.toFixed(0) + " / " + object.temp.min.toFixed(0) + "</h4>"
            + "<img src=" + "http://openweathermap.org/img/w/" + object.weather[0].icon + ".png>"
            + "<p><strong>" + object.weather[0].main + ": " + "</strong>"
            + object.weather[0].description + "</p>"
            + "<p>Humidity: " + object.humidity + "</p>"
            + "<p>Wind: " + object.speed + "</p>"
            + "<p>Pressure: " + object.pressure + "</p>"
            + "</div>";
    }

    google.maps.event.addListener(marker, "dragend", function (event) {
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();

        requestWeatherData(lat, lng);
    });

    function requestWeatherData(lat, lng) {
        var weatherData = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "f55abc25005d6e40ce57f84187a6c6e5",
            lat: lat,
            lon: lng,
            units: "imperial",
            cnt: 3
        });
        weatherData.done(function (data) {
            var city = data.city.name;
            $("#weatherLocation").html(city);
            var columns = [];
            data.list.forEach(function (object, i) {
                columns.push(populateForecast(object, i));
            });
            $("#day").html(columns);

        });
    }

    requestWeatherData(mapOptions.center.lat, mapOptions.center.lng);
})();