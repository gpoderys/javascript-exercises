const palindromes = function (str) {
    let str2 = []
    str2 = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    str2 = str2.split('')
    str2 = str2.map(item => item.toLowerCase())
     for (let i = 1; i < str2.length+1; i++){
        if (str2[i-1] !== str2[str2.length-i]){
            return false
        }
    }
    return  true
};

// Do not edit below this line
module.exports = palindromes;
