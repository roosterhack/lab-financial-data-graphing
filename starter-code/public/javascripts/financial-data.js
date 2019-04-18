//getting data
const searchBitcoin = (from, to, currency) => {
  axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json`).then(response => {
    console.log(response);
  });
};
