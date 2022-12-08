var subsets = function(nums) {
    var ans = [];
    function dfs(current, subset) {
        console.log("current: ",current);
        console.log("subset: ", subset)
        if(current.length == 0) {
            ans.push(subset)
            return
        } else {
            var newCurrent = Array.from(current);
            var newSubset = Array.from(subset);
            const first = current[0];
            newCurrent.shift();
            dfs(newCurrent, newSubset);
            newSubset.push(first);
            dfs(newCurrent, newSubset);
        }
    }
    dfs(nums, []);
    return ans;
};

console.log(subsets([1,2,3]));