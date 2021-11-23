let cityCoords = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=f85be298446b14abaf2660208bb00bf7`

fetch(cityCoords, {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (fiveDayData) {
      console.log("This is the openWeather fetch for lat and lon")
      console.log(fiveDayData.coord);
      console.log(fiveDayData.coord.lon);
      console.log(fiveDayData.coord.lat);
  
      return fetch(`https://www.airnowapi.org/aq/forecast/latLong/?format=json&latitude=${fiveDayData.coord.lat}&longitude=${fiveDayData.coord.lon}&date=2021-11-23&distance=25&API_KEY=7880F6AC-7477-433F-9C85-ECDA8C61EEA0`)
  })
  .then(function (airNowData) {
      return airNowData.json();
  })
  .then(function (airNowJson) {
      console.log(airNowJson);
  });

