// Hooking into submit button to begin fetch
const citySubmitBtn = document.querySelector('#citySubmitBtn');

// Submit button calls citySearch function on click
citySubmitBtn.addEventListener("click", function(event){
  event.preventDefault();
  let userCity = document.querySelector(".form-select").value;
  citySearch(userCity);
});

// citySearch passes user input, userCity, as parameter
function citySearch(userCity) {
  console.log("Search button function pressed. Checking to ensure search box contains a city.")
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
    // if (landmarkData.term = text.includes("Barcelona")) {
      //   let landmarkImg = document.createElement('img');
    //   // landmarkImg.innerHTML
    //   cityName.appendChild(landmarkImg);
    // }
    console.log("City name populated in card.");
    cityLM.textContent = "Check out the top landmarks:";
    for (let landmarkIndex = 0; landmarkIndex < 3; landmarkIndex++) {
      let landmarkItem = document.createElement('p');
      cityLM.appendChild(landmarkItem);
      landmarkItem.textContent = landmarkData.suggestions[2].entities[landmarkIndex].name;
    }
  };
  
  
  








  const currencySubmitBtn = document.querySelector("#currencyExch");
  
  // currencySubmitBtn calls currencySubmit function on click
  currencySubmitBtn.addEventListener("click", function(event){
    event.preventDefault();
    currencySubmit();
  });

  // Hooking into user input
  
  function currencySubmit() {
    console.log("currencySubmit called. User has submitted an amount.");
    let userAmount = document.getElementById("currency-textbox").value;
    console.log("User amount is " + userAmount + " USD.")
    if (!userAmount) {
      console.error('Please enter an amount in Dollars');
      return;
    }
    console.log("currencyCompare called with userAmount passed as parameter.");
    currencyCompare(userAmount);
  };

  let citySelection = document.querySelector("#citySelect");
  citySelection.onchange = function(event){
      let code = event.target.options[event.target.selectedIndex].dataset.code;
      console.log("Country code: " + code);
    };

  // Function call for currency api
function currencyRate (code, userAmount) {
    citySelection.onchange = function(event){
    let code = event.target.options[event.target.selectedIndex].dataset.code;
    console.log("Country code: " + code);
  };
  console.log(code);
  console.log(userAmount);




// let currencyApi = `https://api.exchangerate.host/latest?base=USD&symbols=${code}&amount=${userAmount}`;    
    fetch(currencyApi)
      .then(function (response) {
        return response.json();
  })
    .then(function(currencyData){
     console.log(currencyData);
    })

console.log(currencyApi);
};











