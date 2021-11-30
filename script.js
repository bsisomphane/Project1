// Hooking into submit button to begin fetch
const citySubmitBtn = document.querySelector('#citySubmitBtn');

// Submit button calls citySearch function on click
citySubmitBtn.addEventListener("click", function(event){
  event.preventDefault();
  let userCity = document.querySelector(".form-select").value;
  // addHistory(userCity);
  // populateHistory();
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
    cityLM.textContent = "Check out the top places to visit in " + landmarkData.term + "!";

    for (let landmarkIndex = 0; landmarkIndex < 3; landmarkIndex++) {
      let landmarkItem = document.createElement('p');
      cityLM.appendChild(landmarkItem);
      landmarkItem.textContent = landmarkData.suggestions[2].entities[landmarkIndex].name;
    }
  };
  
  
  








  const currencySubmitBtn = document.querySelector("#currencyExch");
  let code;
  
  // currencySubmitBtn calls currencySubmit function on click
  currencySubmitBtn.addEventListener("click", function(event){
    event.preventDefault();
    currencySubmit();
  });

  // Hooking into user input

  let citySelection = document.querySelector("#citySelect");
  citySelection.onchange = function(event){
      code = event.target.options[event.target.selectedIndex].dataset.code;
      console.log("Country code: " + code);
    };
  
  function currencySubmit() {
    console.log("currencySubmit called. User has submitted an amount.");
    let userAmount = document.getElementById("currency-textbox").value;
    console.log("User amount is " + userAmount + " USD.")
    if (!userAmount) {
      console.error('Please enter an amount in Dollars');
      return;
    }
    console.log("currencyRate called with userAmount passed as parameter.");
    console.log(code);
    currencyRate(code, userAmount);
  };


  // Function call for currency api
function currencyRate (code, userAmount) {
  console.log(code);
  console.log(userAmount);

let currencyApi = `https://api.exchangerate.host/latest?base=USD&symbols=${code}&amount=${userAmount}`;    
    return fetch(currencyApi)
      .then(function (response) {
        return response.json();
  })
      .then(function (currencyData) {
      console.log("Successful fetch from echangerateAPI. Fetch data is stored in currencyData");
      console.log(currencyData);
      populateCECard(currencyData, userAmount, code);
  })
};

function populateCECard(currencyData, userAmount, code) {
  let currencyCompare = document.querySelector("#currency-compare");
  currencyCompare.textContent = userAmount + " USD is worth approximately " + Math.floor(currencyData.rates[Object.keys(currencyData.rates)[0]]) + " " + code + " in this city.";
    console.log(userAmount);
    console.log("Currency populated in card.");
};





// Localstorage skeleton TBA

// let cityHistory = {city: []};

// function onLoad() {
//   if(localStorage.getItem('history')) {
//     cityHistory = JSON.parse(localStorage.getItem('history'));
//   }
// }

// function addHistory(dataToSave) {
//   cityHistory.city.push(dataToSave);
//   localStorage.setItem('history',JSON.stringify(cityHistory));
//   if (localStorage.length() > 3) {
//     let retrievedHistory1 = JSON.parse(localStorage.getItem('history'));
//     retrievedHistory1.city.pop()
//     localStorage.setItem('history',JSON.stringify(cityHistory));
//     let retrievedHistory2 = JSON.parse(localStorage.getItem('history'));
//     console.log(retrievedHistory2);
//   }
// }

// let retrievedHistory1 = JSON.parse(localStorage.getItem('history'));
// retrievedHistory1.city.pop()
// localStorage.setItem('history',JSON.stringify(cityHistory));
// let retrievedHistory2 = JSON.parse(localStorage.getItem('history'));
// console.log(retrievedHistory2);

// function populateHistory() {
//     console.log("History populated.");
//       document.querySelector("#his1").textContent = retrievedHistory2.city[0];
//       document.querySelector("#his2").textContent = retrievedHistory2.city[1];
//       document.querySelector("#his3").textContent = retrievedHistory2.city[2];
//     };