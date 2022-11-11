var find132pattern = function(nums) {
    if (nums.length < 2) {
        return false;
    }
    var stack = [];
    var curMin = nums[0];
    for (let i = 1; i < nums.length; i++) {
        while (stack.length != 0 && stack[stack.length - 1][0] <= nums[i]) {
            let a = stack.pop();
        }
        if (stack.length != 0 && nums[i] > stack[stack.length - 1][1]) {
            return true
        }
        stack.push([nums[i], curMin]);
        curMin = Math.min(curMin, nums[i]);
    }
    return false;
};

console.log(find132pattern([1,4,0,-1,-2,-3,-1,-2]));