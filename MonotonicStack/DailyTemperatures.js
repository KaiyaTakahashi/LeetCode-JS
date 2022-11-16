class Node {
    constructor(val, index) {
        this.val = val;
        this.index = index;
    }
}

var dailyTemperatures = function(temperatures) {
    var monoStack = [];
    var ans = new Array(temperatures.length).fill(0);
    monoStack.push(new Node(temperatures[0], 0));
    for (let i = 1; i < temperatures.length; i++) {
        while (monoStack.length > 0 && monoStack[monoStack.length - 1].val < temperatures[i]) {
            let temp = monoStack.pop();
            ans[temp.index] = i - temp.index;
        }
        monoStack.push(new Node(temperatures[i], i));
    }
    return ans
};

console.log(dailyTemperatures([30,40,50,60]));