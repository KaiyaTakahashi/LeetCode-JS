var isPowerOfTwo = function(n) {
    var current = 1;
    while (current < n) {
        current *= 2;
    }
    return n == current;
};

console.log(isPowerOfTwo(6))