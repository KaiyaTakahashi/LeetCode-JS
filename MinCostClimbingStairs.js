var minCostClimbingStairs = function(cost) {
    var dp = new Array(cost.length);
    dp[0] = cost[0];
    dp[1] = cost[1];
    if (cost.length <= 2) {
        const ans = dp[dp.length - 1] > dp[dp.length - 2] ? dp[dp.length - 2]: dp[dp.length - 1];
        return ans
    }
    for (let i = 2; i < cost.length; i++) {
        if (dp[i - 1] > dp[i - 2]) {
            dp[i] = dp[i - 2] + cost[i];
        } else {
            dp[i] = dp[i - 1] + cost[i];
        }
    }
    const ans = dp[dp.length - 1] > dp[dp.length - 2] ? dp[dp.length - 2]: dp[dp.length - 1];
    return ans
};

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))