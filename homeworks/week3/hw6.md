## hw1：好多星星
寫完功課的時候，看了之前在 LIOJ 交的紀錄，比較了一下　code 發現之前寫得竟然更簡單！
```js
function solve(lines){
    var temp=''
    for(let i=1; i<=Number(lines[0]); i++){
        temp += '*'
        console.log(temp)
    }
}
```
但是簡單到第一直覺讓我懷疑是不是真的可以過 XD

## hw2：水仙花數
這題在寫的時候針對拆開位數總共試了兩種方式，一種是用老師教的 %10 取餘數，另一種是作業裡寫的用字串 split。發現雖然用 split 寫得時候很方便，但程式跑起來的效率卻比較慢。

## hw3：判斷質數
這題終於學以致用地用到三元運算子！另外跟之前課程開始前寫的 code 比較，竟然快了 100ms，原來這就是進步的感覺 xD
**複習前**
```js
function solve(lines) {
	let flag = 0;
	for(let i = 1; i <= lines[0]; i++) {
		for(let j = 1; j <= lines[i]; j++) {
			if(lines[i] % j === 0) {
				flag += 1;
			};
		};
		if(flag > 2) {
			console.log("Composite");
		}else if(flag === 1) {
			console.log("Composite");
		}else {
			console.log("Prime");
		}
		flag = 0;
	};
};
```
**複習後**
```js
function solve(lines){
    let n = Number(lines[0]);
	for(let i = 1; i <= n; i++){
		console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite');
	};
};

function isPrime(num){
	if(num === 1) return false;
	for(let i = 2; i < num; i++){
		if(num % i === 0) return false;
	};
	return true;
};
```

## hw4：判斷迴文
一樣又好奇的用了內建函式寫了另外一個更簡單的版本：
```js
function solve(lines){
    let temp = lines[0].split('').reverse().join('')
	console.log(lines[0] === temp ? 'True' : 'False')
};
```
但發現不管是記憶體還是花費時間都沒有差別，我在想或許是題目說字串的範圍只有到 100 的關係嗎，所以可能是測資不夠多不夠大？
便自己建了長度很長然後數量也不小的測資．然後用上課學到的 getTime 測花費時間，不過結果還是沒有差別。可能就能證明這兩個演算法的效率應該是一樣的 O(N)。

## hw5：聯誼順序比大小
雖然這題也是之前解過了，但是又再一次解的時候還是忽略了看題目範圍，第一次依舊是把 A、B 用 Number 去轉，重看一次題目後才又改成 BigInt XD