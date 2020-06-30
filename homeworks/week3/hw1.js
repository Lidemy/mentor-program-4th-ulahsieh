/* eslint-disable no-shadow */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(lines) {
  for (let i = 0; i < lines; i += 1) {
    let temp = '';
    for (let j = 0; j <= i; j += 1) {
      temp += '*';
    }
    console.log(temp);
  }
}

rl.on('close', () => {
  solve(lines);
});
