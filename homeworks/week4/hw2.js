/* eslint-disable  import/no-unresolved, no-unused-vars, default-case */

const request = require('request');
const process = require('process');

const baseUrl = 'https://lidemy-book-store.herokuapp.com/books/';

function listBooks() {
  request(
    'https://lidemy-book-store.herokuapp.com/books/?_limit=20',
    (error, response, body) => {
      const json = JSON.parse(body);
      if (error !== null) {
        console.log(error);
      } else {
        for (let i = 0; i < 20; i += 1) {
          console.log(json[i].id, json[i].name);
        }
      }
    },
  );
}

function readBooks() {
  request(
    baseUrl + process.argv[3],
    (error, response, body) => {
      const json = JSON.parse(body);
      if (error !== null) {
        console.log(error);
      } else {
        console.log(json.name);
      }
    },
  );
}

function deleteBooks() {
  request.delete(
    baseUrl + process.argv[3],
    (error, response, body) => {
      if (error !== null) {
        console.log(error);
      } else {
        console.log(response.statusCode);
      }
    },
  );
}

function createBooks() {
  request.post(
    {
      url: baseUrl,
      form: {
        name: process.argv[3],
      },
    },
    (error, response, body) => {
      if (error !== null) {
        console.log(error);
      } else {
        console.log(response.statusCode);
      }
    },
  );
}

function updateBooks() {
  request.patch(
    {
      url: baseUrl + process.argv[3],
      form: {
        name: process.argv[4],
      },
    },
    (error, response, body) => {
      if (error !== null) {
        console.log(error);
      } else {
        console.log(response.statusCode);
      }
    },
  );
}

switch (process.argv[2]) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBooks();
    break;
  case 'delete':
    deleteBooks();
    break;
  case 'create':
    createBooks();
    break;
  case 'update':
    updateBooks();
    break;
}
