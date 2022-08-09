const fibonacci = function(x) {
    if (typeof x === "string") {
        x = parseInt(x);
    }
    if (x <= 0) {
        return "OOPS";
    }
    if (x === 1 || x === 2) {
        return 1;
    }
    return fibonacci(x-1) + fibonacci(x-2);
};

// Do not edit below this line
module.exports = fibonacci;
