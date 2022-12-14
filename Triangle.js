// var minimumTotal = function(triangle) {
//     function dfs(currentRow, currentCol) {
//         if (triangle[currentRow + 1] == undefined) {
//             return triangle[currentRow][currentCol];
//         } else {
//             const left = triangle[currentRow][currentCol] + dfs(currentRow + 1, currentCol);
//             const right = triangle[currentRow][currentCol] + dfs(currentRow + 1, currentCol + 1);
//             if (left < right) {
//                 return left;
//             } else {
//                 return right;
//             }
//         }
//     }

//     return dfs(0, 0);
// };

var minimumTotal = function(triangle) {
    if (triangle.length == 1) {
        return triangle[0][0];
    }
    var dp = Array.from(triangle);
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[i][j] = dp[i + 1][j] > dp[i + 1][j + 1] ? dp[i + 1][j + 1] + triangle[i][j]: dp[i + 1][j] + triangle[i][j];
        }
    }
    return dp[0][0]
};

console.log(minimumTotal([[-10]]))