import 'es6-promise';
import _fetch from 'whatwg-fetch';

const currenctUrl = 'https://www.mbank.pl/ajax/currency/drawChart/?curr=';

const getDolarHistory = () => {
  const dolarUrl = `${currenctUrl}USD`;
  return fetch(dolarUrl, {
    // method: 'get',
    // headers: {
    //   'Access-Control-Allow-Origin': '*'
    // }
  }).then(reponse => response.json())
  .then((currencyHistory) => {
    console.log(currencyHistory);
    const hist = createCurrencyObject(currencyHistory);
    console.log(hist);
    return hist;
  });
};

const createCurrencyObject = (currencyItem) => {
  return currencyItem.data.map ((item) => {
    return {
      date: new Date (item[0]),
      value: item[1]
    }
  });
};

export default getDolarHistory;
