/* eslint-disable no-shadow, no-param-reassign */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function isValid(num) {
  num += '';
  const numArr = num.split('');
  let temp = 0;
  for (let i = 0; i < numArr.length; i += 1) {
    temp += Number(numArr[i]) ** numArr.length;
  }
  return Number(num) === temp;
}

function solve(lines) {
  const n = lines[0].split(' ')[0];
  const m = lines[0].split(' ')[1];
  for (let i = Number(n); i <= Number(m); i += 1) {
    if (isValid(i)) console.log(i);
  }
}

rl.on('close', () => {
  solve(lines);
});
