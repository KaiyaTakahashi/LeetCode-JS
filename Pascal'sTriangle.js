var generate = function(numRows) {
    console.log(numRows == 2)
    var dp = new Array(numRows);
    dp[0] = [1];
    if (numRows == 1) {
        return dp;
    }
    dp[1] = [1, 1];
    if (numRows == 2) {
        return dp;
    }
    for (let i = 2; i < numRows; i++) {
        var arr = new Array(i + 1);
        arr[0] = 1;
        arr[arr.length - 1] = 1
        for (let j = 1; j < i; j++) {
            arr[j] = dp[i - 1][j - 1] + dp[i -1][j];
        }
        dp[i] = arr;
    }
    return dp;
};

console.log(generate(2))