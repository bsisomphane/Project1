
// pulls selection from drop down list
let countrySelect = document.querySelector('.form-select');
let currencyCode = countrySelect.value;

console.log(countrySelect.value);

// currency submit buttons; returns value from currency box
let currencySubmitBtn = document.getElementById('currencyExch');
currencySubmitBtn.addEventListener("click", function(event){
  console.log("test")
    event.preventDefault();
  currencySubmit(event);
});

// Hooking into user input

function currencySubmit () {
    console.log("This is the currencySubmit Test");
    let amountBlank = document.getElementById("currency-textbox").value;
    console.log(amountBlank)
    if (!amountBlank) {
      console.error('Please enter an amount in Dollars');
      return;

    }
   currencyRate(amountBlank);
  }

  // Function call for currency api
function currencyRate (amountBlank) {
let currencyApi = `https://api.exchangerate.host/latest?base=USD&symbols=${currencyCode}&amount=${amountBlank}`;    
    fetch(currencyApi)
      .then(function (response) {
        return response.json();
  })
    .then(function(currencyData){
     console.log(currencyData);
    })

console.log(currencyApi);

};



