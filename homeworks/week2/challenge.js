function binarySearch(arr, target) {
	let low = 0
	let high = arr.length-1
	let mid
	while(low <= high) { 
		mid = Math.floor((low + high) / 2);  //取中間值
        if(arr[mid] < target) {  //目標若比中間數大，找右半部
			low = mid + 1
		} else if (arr[mid] > target) {　//目標若比中間數小，找左半部
			high = mid - 1
		} else {　//目標等於中間數
			return mid
		}
	}
	return -1
}

/*
本來是要用題目寫的線性搜尋，但因為表明要用更有效率的寫法，所以下面是還沒看提示前自己想的解法；
結果後來丟 LIOJ 發現 timeout，查資料後才發現下面的作法還是線性搜尋啊 ((扶額
根本在搞笑 XDDD
重新再理解後，二分搜尋法就是把陣列變一半，再變一半的一半，再一半的一半的一半，直到找到剩一個看是不是搜尋目標值，
*/

function stupidSearch(arr, n){
    var flag = Math.floor(arr.length/2)
    //console.log(flag)
    if(arr[flag]>n){ //如果 n 比中間數小，則找前半部，從[零]到[中間數-1] 
        for(let i=0; i<arr[flag];i++){
            if(arr[i]===n) return i
        }
        return -1
    }if(arr[flag]<=n){ //如果 n 比中間數大，則找後半部，從[中間數+1]到[最後]
        for(let i=flag; i<arr.length;i++){
            if(arr[i]===n) return i
        }
        return -1
    }
}