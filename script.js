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
    if (landmarkData.term = text.includes("Barcelona")) {
      let landmarkImg = document.createElement('img');
      // landmarkImg.innerHTML
      cityName.appendChild(landmarkImg);
    }
  console.log("City name populated in card.");
  cityLM.textContent = "Check out the top landmarks:";
    for (let landmarkIndex = 0; landmarkIndex < 3; landmarkIndex++) {
      let landmarkItem = document.createElement('p');
      cityLM.appendChild(landmarkItem);
      landmarkItem.textContent = landmarkData.suggestions[2].entities[landmarkIndex].name;
    }
};



// Array = queryselectorall options

// Array.addEventListener("click", );

// value selected option from dropdown in javascript