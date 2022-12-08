var sortColors = function(nums) {
    var dict = {};
    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]] == undefined) {
            dict[nums[i]] = 1;
        } else {
            dict[nums[i]] += 1;
        }
    }
    while (nums.length != 0) {
        nums.pop();
    }
    for (var key in dict) {
        for (let i = 0; i < dict[key]; i++) {
            nums.push(key);
        }
    }
    return nums;
};

console.log(sortColors([2,0,2,1,1,0]));