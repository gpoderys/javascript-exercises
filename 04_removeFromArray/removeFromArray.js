const removeFromArray = function(array) {
    for (let k = 1; k < arguments.length; k++){
        // loop through all possible arguments
        arg = arguments[k]
        // use current argument to check if it needs to be spliced from array
        for (let i = 0; i < array.length; i++) {
            if (array[i] === arg ) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
