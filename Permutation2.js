var permuteUnique = function(nums) {
    var dic = {};
    for (let i = 0; i < nums.length; i++) {
        if (dic[nums[i]] == undefined) {
            dic[nums[i]] = 1;
        } else {
            dic[nums[i]] += 1;
        }
    }
    var ans = [];
    function dfs(dictionary, pattern) {
        if (pattern.length == nums.length) {
            ans.push(pattern);
            return
        } else {
            for (var key in dic) {
                if (dictionary[key] > 0) {
                    var newPattern = Array.from(pattern);
                    newPattern.push(key)
                    var newDic = {};
                    Object.assign(newDic, dictionary);
                    newDic[key] -= 1;
                    dfs(newDic, newPattern);
                }
            }
        }
    }
    dfs(dic, []);
    return ans;
};

console.log(permuteUnique([1,2,3]));