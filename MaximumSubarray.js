var maxSubArray = function(nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    var dp = new Array(nums.length);
    var ans = Number.MIN_SAFE_INTEGER;
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] + dp[i - 1] > 0) {
            if (nums[i] + dp[i - 1] < nums[i]) {
                dp[i] = nums[i]
            } else {
                dp[i] = nums[i] + dp[i - 1];
            }
        } else {
            dp[i] = nums[i];
        }
    }
    for (let i = 0; i < dp.length; i++) {
        if (ans < dp[i]) {
            ans = dp[i]
        }
    }
    return ans;
};

console.log(maxSubArray([-1,-2]))