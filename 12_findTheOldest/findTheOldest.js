const findTheOldest = function(array) {
    year = new Date().getFullYear();
    return array.reduce((prev, current) => {
        if (!('yearOfDeath' in prev)) {
            prev['yearOfDeath'] = year;
        }
        if (!('yearOfDeath' in current)) {
            prev['yearOfDeath'] = year;
        }
        if (prev.yearOfDeath - prev.yearOfBirth < current.yearOfDeath - current.yearOfBirth) {
            return current;
        }
        else {return prev;}
    });
};

// Do not edit below this line
module.exports = findTheOldest;
