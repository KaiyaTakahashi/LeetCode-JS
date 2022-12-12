var isPowerOfFour = function(n) {
    var current = 1;
    while (current < n) {
        current *= 4;
    }
    return current == n
};

console.log(isPowerOfFour(1))
