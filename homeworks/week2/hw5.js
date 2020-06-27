function join(arr, concatStr) {
    if(arr.length===0) return ''
    var result = '';
    for(var i = 0; i < arr.length-1; i++) {
        result += arr[i] + concatStr;
    };
    result += arr[arr.length-1];
    return result;
};

function repeat(str, times) {
    var result='';
    for(var i = 0; i < times; i++) {
        result += str;
    };
    return result;
};

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
console.log(join([],'@'));
console.log(repeat('', 5));