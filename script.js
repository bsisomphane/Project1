


let exchangeRates = `https://api.exchangerate.host/latest?base=USD&symbols=${countryCode}&amount=${amountBlank}`
fetch(exchangeRates, {

})
   .then(function (response){
       return response.json();
   })
   .then(function (currencyData){
       console.log("currency data");
       console.log(currencyData.rates);
   });

let countryText = document.querySelector('#city-text');
let currencySubmitBtn = document.querySelector('#currency-submit');

currencySubmitBtn.addEventListener('click', currencySubmit);
// Hooking into user input
function currencySubmit () {
    // event.preventDefault();
    console.log("This is the searchSubmit Test");
    let userCity = document.querySelector("#city-text").value;
    // let weatherInCity = "Sunny"
    if (!userCity) {
      console.error('Please enter an amount in $USD');
      return;
    }
   citySearch(userCity);
  }
console.log(cityText);
// Function call for weather api
function citySearch (userCity) {
    let cityCoords = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=f85be298446b14abaf2660208bb00bf7`;
    fetch(cityCoords)
      .then(function (response) {
        return response.json();
      })
      .then(function (fiveDayData) {
          console.log("This is the openWeather fetch.")
          console.log(fiveDayData);
          oneCall(fiveDayData);
          fiveDayWeather(fiveDayData);
      });
    };