/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-lonely-if */
/* eslint-disable no-undef */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(lines) {
  for (let i = 1; i <= Number(lines[0]); i++) {
    const arr = lines[i].split(' ');
    const A = BigInt(arr[0]);
    const B = BigInt(arr[1]);
    if (arr[2] === '1') {
      if (A > B) {
        console.log('A');
      } else if (A < B) {
        console.log('B');
      } else {
        console.log('DRAW');
      }
    } else {
      if (A > B) {
        console.log('B');
      } else if (A < B) {
        console.log('A');
      } else {
        console.log('DRAW');
      }
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
