// Hooking into submit button to begin fetch
let citySubmitBtn = document.querySelector('#citySubmitBtn');

// Submit button calls citySearch function on click
citySubmitBtn.addEventListener("click", function(event){
  event.preventDefault();
  citySearch(event);
});

let userCity = document.querySelector("#citySubmitBtn");

// Hooking into user input
function citySearch() {
  // event.preventDefault();
  console.log("Search button function pressed. Checking to ensure search box contains a city.")
  // let userCity = document.querySelector(".form-select").value;
  let userCity = "Barcelona";
  if (!userCity) {
    console.error('Please enter a location to search');
    return;
  } else {
    console.log(`Function citySearch executed. Value searched is ${userCity}.`);
  }
 rapidApiSearch(userCity);
 console.log("rapidApiSearch called with userCity as a parameter.")
}

function rapidApiSearch (userCity) {
  let rapidApiData = `https://hotels4.p.rapidapi.com/locations/v2/search?query=${userCity}&locale=en_US&currency=USD`
// Fetching from rapidApiData url
  fetch(rapidApiData, 
    {
    "method": "GET",
	  "headers": {
		"x-rapidapi-host": "hotels4.p.rapidapi.com",
		"x-rapidapi-key": "21f4c0498cmsh813bdb469f313d1p130468jsn583f4c713308"
	}
})
  .then(function (response) {
    console.log("rapidApi fetch request sent.");
    return response.json();
  })
  .then(function (landmarkData) {
    console.log("Successful fetch from rapidApi. Fetch data is stored in landmarkData");
    console.log(landmarkData);
    populateLMCard(landmarkData);
  })
}

function populateLMCard(landmarkData) {
  let cityName = document.querySelector(".city-name");
  let cityLM = document.querySelector(".city-lm");
  cityName.textContent = landmarkData.term;
  console.log("City name populated in card.");
  cityLM.textContent = "Check out the top landmark(s):";
    for (let landmarkIndex = 0; landmarkIndex <= 3; landmarkIndex++) {
      let landmarkItem = document.createElement('p');
      cityLM.appendChild(landmarkItem);
      // landmarkItem.textContent = JSON.stringify(landmarkData);
      landmarkItem.textContent = landmarkData.suggestions[2].entities[landmarkIndex].name;
    }
};












//     // Uses oneCallData to populate the current weather card.
// function currentWeatherCard(oneCallData) {
//   console.log("Calling currentWeatherCard function. This function creates the header card for the city, and populates it with data.");
//       let dayTemp = oneCallData.current.temp;
//       // console.log(dayTemp);
//       let dayWind = oneCallData.current.wind_speed;
//       // console.log(dayWind);
//       let dayHumidity = oneCallData.current.humidity;
//       // console.log(dayHumidity);
//       let dayUV = oneCallData.current.uvi;

// // Creates div for current day weather
//       let currentDayCard = document.createElement('div');
//       document.querySelector('#current-card-sec').appendChild(currentDayCard);
//       currentDayCard.setAttribute('id', 'current-day-card-div');
//       currentDayCard.setAttribute('class', 'card');
//       currentDayCard.setAttribute('style', 'width: 18rem');

// // Creates header inside the div
//       let dayCard = document.createElement('header');
//       document.querySelector('#current-day-card-div').appendChild(dayCard);
//       currentDayCard.setAttribute('id', 'current-day-card-header');
//       currentDayCard.setAttribute('class', 'd-flex card-body mh-20 justify-content-center');

// // Creates h5 inside of the header
//       let cardHeaderText = document.createElement('h5');
//       cardHeaderText.setAttribute('style', 'text-align: center');
//       dayCard.appendChild(cardHeaderText);
//       cardHeaderText.textContent = userCity;

// // Populates current weather card temperature
//       let pTemp = document.createElement('p');
//       dayCard.appendChild(pTemp);
//       pTemp.setAttribute('id', 'current-weather-temp');
//       document.querySelector('#current-weather-temp').textContent = "Temp: " + dayTemp + "°F";

// // Populates current weather card wind speed
//       let pWind = document.createElement('p');
//       dayCard.appendChild(pWind);
//       pWind.setAttribute('id', 'current-weather-wind');
//       document.querySelector('#current-weather-wind').textContent = "Wind: " + dayWind + " MPH";

// // Populates current weather card humidity
//       let pHumidity = document.createElement('p');
//       dayCard.appendChild(pHumidity);
//       pHumidity.setAttribute('id', 'current-weather-humidity');
//       document.querySelector('#current-weather-humidity').textContent = "Humidity: " + dayHumidity + "%";

// // Populates current weather card UV index
//       let pUV = document.createElement('p');
//       dayCard.appendChild(pUV);
//       pUV.setAttribute('id', 'current-weather-UV');
//       document.querySelector('#current-weather-UV').textContent = "UV index: " + dayUV;
//     };