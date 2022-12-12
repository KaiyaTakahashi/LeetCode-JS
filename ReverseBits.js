var reverseBits = function(n) {
    var t = n.toString(2).split("");
    while(t.length < 32) t.unshift("0");
    return parseInt(t.reverse().join(""), 2);
};