// Hooking into submit button to begin fetch
let citySubmitBtn = document.querySelector('#citySubmitBtn');

// citySubmitBtn.addEventListener('click', citySearch(event) {
//   event.preventDefault()
// });
citySubmitBtn.addEventListener("click", function(event){
  event.preventDefault();
  citySearch();
});


// Hooking into user input for the city name to populate fetch url
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
    console.log("apiSearch function ");
    return response.json();
  })
  .then(function (hotelData) {
    console.log("Successful fetch from hotel API. Fetch data is stored in hotelData");
    console.log(hotelData);
    populateLMS(hotelData);
  })
}

function populateLMS(hotelData) {
  for (let i = 0; i < hotelData.suggestions[2].entities.length; i++) {
    const landmarks = hotelData.suggestions[2].entities[i].name;
    console.log(landmarks);
  }
  let cityName = document.querySelector(".city-name");
  let cityLM = document.querySelector(".city-lm");
  cityName.innerHTML = hotelData.term;
  console.log("City and Country populated.");
  cityLM.innerHTML = hotelData.landmarks;
  console.log(hotelData.landmarks);
}



// console.log(hotelData.suggestions[2].entities[1].name);

/* <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title city-name">Weather</h5>
          <p class="card-text city-lm">todays weather is blah blah blah</p>
        </div>
      </div>
    </div> */