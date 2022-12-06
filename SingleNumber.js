var singleNumber = function(nums) {
    var current = nums[0];
    for (let i = 1; i < nums.length; i++) {
        current ^= nums[i];
    }
    return current
};
console.log(singleNumber([4,1,2,1,2,4,3,7,3]))