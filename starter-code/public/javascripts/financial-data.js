//get values form input
const dateFromInput = document.querySelector(".date-from");
const dateToInput = document.querySelector(".date-to");
const currencyInput = document.querySelector("#currency");

//getting data
const searchBitcoin = () => {
  const dateFrom = dateFromInput.value;
  const dateTo = dateToInput.value;
  axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json?start=${dateFrom}&end=${dateTo}`).then(response => {
    const { data } = response;
    const date = Object.keys(data.bpi);
    const price = Object.values(data.bpi);

    printCharts(date, price);
  });
};
// update currency
const changeCurrency = () => {
  const currency = currencyInput.value;
  axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`).then(response => {
    const { data } = response;
    const date = Object.keys(data.bpi);
    const price = Object.values(data.bpi);

    printCharts(date, price);
  });
};

const printCharts = (date, price) => {
  const ctx = document.getElementById("myChart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: date,
      datasets: [
        {
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          label: "Bitcoin chart",
          data: price
        }
      ]
    }
  });
};

searchBitcoin();

dateFromInput.addEventListener("change", searchBitcoin);
dateToInput.addEventListener("change", searchBitcoin);
currencyInput.addEventListener("input", changeCurrency);
