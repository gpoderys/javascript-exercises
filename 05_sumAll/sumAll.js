const sumAll = function(int1, int2) {
    let intSum = 0
    if (int1 <0 || int2 <0) {
        return 'ERROR'
    }
    // passes all the tests, but won't give error if parameter isn't an integer
    if(typeof(int1) != "number" || typeof(int2) != "number"){
        return 'ERROR'
    }
    if(int1 > int2) {
        let int3 = int1
        int1 = int2
        int2 = int3
    }
    for (i = int1; i <= int2; i++){
        intSum += int1
        int1++
    }
    return intSum
};

// Do not edit below this line
module.exports = sumAll;
