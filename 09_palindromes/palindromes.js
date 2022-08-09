const palindromes = function (str) {
    let newStr = str.replace(/[^a-z0-9]/ig, '');
    newStr = newStr.toLowerCase();
    const length = newStr.length;
    const halfLength = Math.floor(length / 2);
    for (let i = 0; i < halfLength; i++) {
        if (newStr[i] !== newStr[length -1 -i]) {
            return false;
        }
    }
    return true; 
};

// Do not edit below this line
module.exports = palindromes;
