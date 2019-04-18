//getting data
const searchBitcoin = () => {
  axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json`).then(response => {
    const { data } = response;
    const date = Object.keys(data.bpi);
    const price = Object.values(data.bpi);
    console.log(date, price);
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

// const getStockInfo = stockName => {
//   axios
//     .get(`https://api.iextrading.com/1.0/stock/${stockName}/chart`)
//     .then(response => {
//       const { data } = response;
//       console.log(data);
//       const labels = data.map(el => el.label);
//       const prices = data.map(el => el.close);

//       printCharts(labels, prices);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// };

// getStockInfo('amzn');
