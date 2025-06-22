const sumAll = function(lowerBound, upperBound) {
    //guard 1: must be integer
    if(!Number.isInteger(lowerBound) || !Number.isInteger(upperBound)){
        return "ERROR";
    }
    //guard 2: negative number
    if(lowerBound < 0 || upperBound < 0){
        return "ERROR";
    }

    //Make sure the lowerBound is the lower value
    if(lowerBound > upperBound){
        let temp = upperBound;
        upperBound = lowerBound;
        lowerBound = temp;
    }
    let result = 0;
    for(let x=lowerBound; x <= upperBound; x++){
        result += x;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
