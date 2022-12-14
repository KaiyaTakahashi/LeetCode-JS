var isPowerOfThree = function(n) {
    var current = 1;
    while (current < n) {
        current *= 3;
    }
    console.log(current)
    return current == n;
};

console.log(isPowerOfThree(27))