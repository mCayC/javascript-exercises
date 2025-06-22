const leapYears = function(year) {
    //Guard invalid input
    if(!Number.isInteger(year)){
        return "ERROR";
    }

    if(year % 4 == 0){
        if(year % 100 != 0 || year % 400 == 0){
            return true;
        }
    }
    //default return
    return false;
};

// Do not edit below this line
module.exports = leapYears;
