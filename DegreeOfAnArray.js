var findShortestSubArray = function(nums) {
    var dic = {};
    var biggest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (dic[nums[i]] == undefined) {
            dic[nums[i]] = 1;
        } else {
            dic[nums[i]] += 1;
        }
        if (biggest < dic[nums[i]]) {
            biggest = dic[nums[i]];
        }
    }
    var shortest = Number.MAX_SAFE_INTEGER;
    for (let key in dic) {
        if (dic[key] == biggest) {
            var s = 0;
            var e = nums.length - 1;
            var isFinished = false
            while (!isFinished) {
                isFinished = true
                if (nums[s] != key) {
                    s += 1;
                    isFinished = false;
                }
                if (nums[e] != key) {
                    e -= 1;
                    isFinished = false
                }
            }
            if (shortest > e - s) {
                shortest = e - s + 1;
            }
        }
    }
    return shortest;
};

console.log(findShortestSubArray([1,2,2,3,1,4,2]))