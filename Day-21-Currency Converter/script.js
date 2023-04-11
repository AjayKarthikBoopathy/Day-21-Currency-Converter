//Final Editted

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

//Create dropdown from the currencies array
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});

//Repeat same thing for the other dropdown
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

//Setting default values
fromDropDown.value = "USD";
toDropDown.value = "INR";


let convertCurrency = () => {
  //Create References
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromDropDown.value;
  var fromCurrencySmall = fromCurrency.toLowerCase();
  console.log(fromCurrencySmall);
  const toCurrency = toDropDown.value;
  var toCurrencySmall = toCurrency.toLowerCase();
  console.log(toCurrencySmall);
  var api=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrencySmall}/${toCurrencySmall}.json`;

  //If amount input field is not empty
  if (amount.length != 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {

        console.log(data);
        let fromExchangeRate = 1;

        let valuesArray = Object.values(data);
        //console.log(valuesArray[1]);
        
        let toExchangeRate = valuesArray[1];
        console.log(toExchangeRate);  
        //console.log(data.inr);

        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
        console.log(convertedAmount);
        result.innerHTML = `${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;

      });
  } else {
    alert("Please fill in the amount");
  }
};

document
  .querySelector("#convert-button")
  .addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);

