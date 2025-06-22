const removeFromArray = function(set, ...filterOut) {
    if(filterOut == null){return set;}
    return set.filter(x => !filterOut.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
