var findDuplicate = function(nums) {
    var dic = {};
    for (let i = 0; i < nums.length; i++) {
        if (dic[nums[i]] == undefined) {
            dic[nums[i]] = 1;
        } else {
            dic[nums[i]] += 1;
        }
    }
    for (var key in dic) {
        if (dic[key] >= 2) {
            return key;
        }
    }
};

console.log(findDuplicate([1,4,4,2,4]));