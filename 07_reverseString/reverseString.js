const reverseString = function(word) {
    let partitions = word.split('');
    let result = "";
    for(let x = partitions.length-1; x>=0;x--){
        result += partitions[x];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
