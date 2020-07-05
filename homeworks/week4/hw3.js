/* eslint-disable  import/no-unresolved */

const request = require('request');

request(
  'https://restcountries.eu/rest/v2/name/tai',
  (error, response, body) => {
    const json = JSON.parse(body);
    if (error !== null) {
      console.log(error);
    } else {
      for (let i = 0; i < json.length; i += 1) {
        const str = `============
國家：${json[i].name}
首都：${json[i].capital}
貨幣：${json[i].currencies[0].code}
國碼：${json[i].callingCodes}`;
        console.log(str);
      }
    }
  },
);
