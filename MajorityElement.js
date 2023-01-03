var majorityElement = function(nums) {
    var count = 1;
    var ans = nums[0];
    var i = 1;
    while (i < nums.length) {
        if (nums[i] == ans) {
            count += 1;
        } else {
            count -= 1;
        }
        if (count == 0) {
            ans = nums[i];
            count = 1;
        } else if (count == -1) {
            ans = nums[i];
            count = 0;
        }
        i += 1;
    }
    return ans;
};

console.log(majorityElement([3,2,3]))