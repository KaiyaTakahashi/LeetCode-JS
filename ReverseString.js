var reverseString = function(s) {
    var temp = [];
    const count = Math.floor(s.length / 2);
    for (let i = 0; i < count; i++) {
        temp.push(s[i]);
        s[i] = s[s.length - i - 1];
        const letter = temp.pop();
        s[s.length - i - 1] = letter;
    }
    return s;
};

console.log(reverseString(["H","a","n","n","a","h"]))