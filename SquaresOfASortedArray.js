var sortedSquares = function(nums) {
    var r = nums.length - 1;
    var l = 0;
    var ansIndex = nums.length - 1;
    var arr = new Array(nums.length);
    while (r >= l) {
        if (r == l) {
            arr[ansIndex] = Math.pow(nums[l], 2);
            return arr;
        } else if (Math.pow(nums[l], 2) > Math.pow(nums[r], 2)) {
            arr[ansIndex] = Math.pow(nums[l], 2);
            l += 1;
        } else {
            arr[ansIndex] = Math.pow(nums[r], 2);
            r -= 1;
        }
        ansIndex -= 1;
    }
    return arr;
};

console.log(sortedSquares([-7,-3,2,3,11]))