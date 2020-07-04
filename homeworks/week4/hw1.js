/* eslint-disable  import/no-unresolved */

const request = require('request');

function callback(error, response, body) {
  const json = JSON.parse(body);
  for (let i = 0; i < 10; i += 1) {
    console.log(json[i].id, json[i].name);
  }
}

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  callback,
);
