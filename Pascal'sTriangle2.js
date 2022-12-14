var getRow = function(rowIndex) {
    var dp = [[1], [1,1]];
    if (rowIndex < 2) {
        return dp[rowIndex];
    }
    for (let i = 2; i <= rowIndex; i++) {
        var arr = new Array(i + 1);
        arr[0] = 1;
        arr[arr.length - 1] = 1;
        for (let j = 1; j < i; j++) {
            arr[j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
        dp.push(arr);
    }
    return dp[rowIndex];
};

console.log(getRow(4));