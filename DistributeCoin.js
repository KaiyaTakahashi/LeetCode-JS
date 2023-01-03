// Not done

var distributeCoins = function(root) {
    var rootArr = [];
    var queue = [];
    queue.push(root);
    while (queue.length != 0) {
        const node = queue.shift();
        rootArr.push(node)
        if(node.left != undefined) {
            queue.push(node.left)
        }
        if(node.right != undefined) {
            queue.push(node.right)
        }
    }
    function distance(a, b) {
        var bigger = a > b? a:b;
        var smaller = a >b? b:a;
        var count = 0;
        while (bigger != smaller) {
            bigger = Math.floor((bigger - 1) / 2);
            count += 1;
            if (bigger < smaller) {
                var temp = bigger;
                bigger = smaller;
                smaller = temp;
            }
        }
        return count
    }
    var noCoins = [];
    var withCoin = 0;
    for (let i = 0; i < rootArr.length; i++) {
        if (rootArr[i] > 0) {
            withCoin = i
        } else {
            noCoins.push(i);
        }
    }
    var ans = 0;
    while (noCoins.length != 0) {
        const node = noCoins.shift();
        ans += distance(node, withCoin);
    }
    return ans;
};

console.log(distributeCoins([0,3,0]
    ))