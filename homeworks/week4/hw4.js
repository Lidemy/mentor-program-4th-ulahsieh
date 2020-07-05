/* eslint-disable  import/no-unresolved */

const request = require('request');

const options = {
  url: 'https://api.twitch.tv/kraken/games/top?limit=100',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': '0jzqu4c3oqvvpjai3agvtjwh1ajgxq',
  },
};

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    const info = JSON.parse(body);
    for (let i = 0; i < info.top.length; i += 1) {
      console.log(info.top[i].viewers, info.top[i].game.name);
    }
  } else {
    console.log('request failed!');
  }
}

request(options, callback);
