/* eslint-disable no-bitwise */
function add(a, b) {
  if (b === 0) return a;
  const sum = a ^ b;
  const carry = (a & b) << 1;
  return add(sum, carry);
}
console.log(add(10, 20));
/*
round 1: a=1010, b=10100, sum=11110, carry=0
round 2: a=11110, b===0, return a = 11110
*/

console.log(add(7, 11));
/*
round 1: a=0111, b=1011, sum=1100, carry= 0011<<1 = 0110
round 2: a=1100, b=0110, sum=1010, carry= 0100<<1 = 1000
round 3: a=1010, b=1000, sum=0010, carry= 1000<<1 = 10000
round 4: a=0010, b=10000, sum=10010, carry = 0
round 5: a=10010, b===0, retrun a = 10010
*/
