const repeatString = function(text, n) {
    if(n < 0){
        return "ERROR";
    }
    let res = "";
    for(let x = 0; x < n; x++){
        res += text;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
