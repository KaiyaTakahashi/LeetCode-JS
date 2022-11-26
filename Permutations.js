var permute = function(nums) {
    var ans = [];
    var ansNum = 1;
    function dfs(leftNums, current) {
        if (leftNums.length == 0) {
            ans.push(current)
            return
        } else {
            for (let i = 0; i < leftNums.length; i++) {
                var newCurrent = Array.from(current)
                newCurrent.push(leftNums[i]);
                var newLeftNums = Array.from(leftNums);
                newLeftNums.splice(i, 1);
                dfs(newLeftNums, newCurrent);
            }
        }
    }

    dfs(nums, [])
    return ans
};

console.log(permute([1,2,3]));