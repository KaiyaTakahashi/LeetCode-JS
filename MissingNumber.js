var missingNumber = function(nums) {
    var boolArr = new Array(nums.length).fill(false);
    for (let i = 0; i < boolArr.length; i++) {
        boolArr[nums[i]] = true
    }
    var ans = -1;
    for (let i = 0; i < boolArr.length; i++) {
        if (boolArr[i] == false) {
            ans = i;
        }
    }
    return ans != -1 ? ans : nums.length;
};

console.log(missingNumber([0,1]));