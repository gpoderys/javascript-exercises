const fibonacci = function(index) {
    if (index < 0) return 'OOPS'
    let current = 1
    let previous = 0
    for (let i = 1; i < index; i++){
        let result = current  + previous
        previous = current
        current = result
    }
    return current
};

// Do not edit below this line
module.exports = fibonacci;
