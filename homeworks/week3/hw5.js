/* eslint-disable no-shadow, no-undef */

const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function solve(lines) {
  for (let i = 1; i <= Number(lines[0]); i += 1) {
    const arr = lines[i].split(' ');
    const A = BigInt(arr[0]);
    const B = BigInt(arr[1]);
    if (A === B) {
      console.log('DRAW');
    } else if ((arr[0] === '1' && A > B) || (arr[0] === '-1' && A < B)) {
      console.log('A');
    } else {
      console.log('B');
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
