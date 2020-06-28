/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solve(lines) {
  const n = Number(lines[0]);
  for (let i = 1; i <= n; i++) {
    console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite');
  }
}

rl.on('close', () => {
  solve(lines);
});
