var canPartitionKSubsets = function(nums, k) {
    var total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    const target = total / k;
    var used = new Array(nums.length).fill(false);

    function backtrack(i, k, subsetSum) {
        if (k == 0) {
            return true;
        }
        if (subsetSum == target) {
            const newK = k - 1;
            return backtrack(0, newK, 0);
        }
        for (let j = i; j < nums.length; j++) {
            if (used[j] || subsetSum + nums[j] > target) {
                continue
            } else {
                used[j] = true
                const newSum = subsetSum + nums[j]
                if (backtrack(j + 1, k, newSum)) {
                    return true 
                }
                used[j] = false;
            }
        }
        return false
    }
    return backtrack(0, k, 0)
};

console.log(canPartitionKSubsets([4,3,2,3,5,2,1], 4))