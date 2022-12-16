var isAnagram = function(s, t) {
    if(s.length != t.length) {
        return false
    }
    var dict = {}
    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]] == undefined) {
            dict[s[i]] = 1;
        } else {
            dict[s[i]] += 1;
        }
    }
    var tDict = {};
    for (let i = 0; i < t.length; i++) {
        if (tDict[t[i]] == undefined) {
            tDict[t[i]] = 1;
        } else {
            tDict[t[i]] += 1;
        }
    }
    var ans = true;
    for (let key in tDict) {
        if (dict[key] && tDict[key] <= dict[key]) {

        } else {
            ans = false;
        }
    }
    return ans
};

console.log(isAnagram("rat","car"))