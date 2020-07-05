/* eslint-disable operator-assignment, no-param-reassign, prefer-template */
function mul(a, b) {
  a = a + '';
  b = b + '';
  const len = a.length + b.length;
  const result = new Array(len).fill(0);
  for (let i = 0; i < a.length; i += 1) {
    for (let j = 0; j < b.length; j += 1) {
      result[i + j + 1] += Number(a[i]) * Number(b[j]);
    }
  }
  // 處理進位
  for (let k = len - 1; k >= 0; k -= 1) {
    if (result[k] >= 10) { // 如果該位數大於 10
      result[k - 1] += Math.floor(result[k] / 10);// 則多餘 10 的部分進位到下一位數
      result[k] %= 10;// 取 10 的餘數放進該位
    }
  }
  // 處理最前面的零
  const i = 0;
  while (result[i] === 0) {
    result.splice(i, 1);
  }
  return result.join('');
}

console.log(mul(123, 456));
