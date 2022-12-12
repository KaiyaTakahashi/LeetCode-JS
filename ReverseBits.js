var reverseBits = function(n) {
    var t = n.toString(2).split("");
    console.log(t)
    while(t.length < 32) t.unshift("0");
    console.log(t)
    return parseInt(t.reverse().join(""), 2);
};

console.log(reverseBits(00000010100101000001111010011100))