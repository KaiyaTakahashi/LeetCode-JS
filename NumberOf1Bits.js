var hammingWeight = function(n) {
    var t = n.toString(2).split("");
    var ans = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] == "1") {
            ans += 1;
        }
    }
    return ans;
};

console.log(hammingWeight(00000000000000000000000000001011))