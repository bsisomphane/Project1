let currencySymbol = "EUR"
let amountBlank = "1200"


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