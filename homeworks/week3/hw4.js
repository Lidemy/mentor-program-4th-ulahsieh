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
  let temp = '';
  for (let i = lines[0].length - 1; i >= 0; i -= 1) {
    temp += lines[0][i];
  }
  console.log(lines[0] === temp ? 'True' : 'False');
}

rl.on('close', () => {
  solve(lines);
});
