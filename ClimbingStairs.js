var climbStairs = function(n) {
    var dp = [1, 2];
    if (n == 1) {
        return dp[0];
    } else if (n == 2) {
        return dp[1];
    }
    var count = 2;
    while (count < n) {
        const num = dp[count - 1] + dp[count - 2];
        dp.push(num);
        count += 1;
    }
    return dp[n - 1];
};

console.log(climbStairs(4));