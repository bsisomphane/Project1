// let cityCoords = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=f85be298446b14abaf2660208bb00bf7`

// fetch(cityCoords, {
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (fiveDayData) {
//       console.log("This is the openWeather fetch for lat and lon")
//       console.log(fiveDayData.coord);
//       console.log(fiveDayData.coord.lon);
//       console.log(fiveDayData.coord.lat);
  
//       return fetch(`https://www.airnowapi.org/aq/forecast/latLong/?format=json&latitude=${fiveDayData.coord.lat}&longitude=${fiveDayData.coord.lon}&date=2021-11-23&distance=25&API_KEY=7880F6AC-7477-433F-9C85-ECDA8C61EEA0`)
//   })
//   .then(function (airNowData) {
//       return airNowData.json();
//   })
//   .then(function (airNowJson) {
//       console.log(airNowJson);
//   });

let citySubmitBtn = document.querySelector('#city-name');
citySubmitBtn.addEventListener('click', citySearch);


 

// Hooking into user input for the city name
function citySearch () {
  console.log("This is the city search Test");
  let userCity = document.querySelector("#city-text").value;
  if (!userCity) {
    console.error('Please enter a location to search');
    return;
  }
 apiSearch(userCity);
}

function apiSearch (userCity) {
  let apiData = `https://hotels4.p.rapidapi.com/locations/v2/search?query=${userCity}&locale=en_US&currency=USD`
  fetch(apiData, {
    "method": "GET",
	  "headers": {
		"x-rapidapi-host": "hotels4.p.rapidapi.com",
		"x-rapidapi-key": "21f4c0498cmsh813bdb469f313d1p130468jsn583f4c713308"
	}
  })
  .then(function (response) {
    console.log("This is the response from the apiSearch function");
    return response.json();
  })
  .then(function (hotelData) {
    console.log("Successful fetch from hotel API");
    console.log(hotelData);
  })
};