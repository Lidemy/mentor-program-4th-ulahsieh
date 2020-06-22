function capitalize(str) {
    var result='';
    
    if(97 <= str.charCodeAt(0) && str.charCodeAt(0) <= 122) {
        result += String.fromCharCode(str.charCodeAt(0)-32);
    }else{
        result += str[0];
    };
    for(var i = 1; i < str.length; i++){
        result += str[i];
    };
    return result;
}

console.log(capitalize('hello'));