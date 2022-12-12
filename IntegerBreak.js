var integerBreak = function(n) {
    if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 1;
    } else if (n == 3) {
        return 2;
    }
    var ans = 1;
    while (n > 0) {
        if (n % 3 == 0) {
            n -= 3;
            ans *= 3;
        } else {
            n -= 2;
            ans *= 2;
        }
    }
    return ans;
};

console.log(integerBreak(7))