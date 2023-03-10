var maximumBags = function(capacity, rocks, additionalRocks) {
    var greedy = [];
    for (let i = 0; i < capacity.length; i++) {
        greedy.push([i, capacity[i] - rocks[i]]);
    }
    greedy.sort((a, b) => {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    })
    var ans = 0;
    var index = 0;
    while (additionalRocks > 0 && index < greedy.length) {
        if (greedy[index][1] == 0) {
            ans += 1;
        } else {
            if (additionalRocks >= greedy[index][1]) {
                additionalRocks -= greedy[index][1];
                ans += 1;
            } else {
                return ans;
            }
        }
        index += 1;
    }
    return ans;
};

console.log(maximumBags([10,2,2],[2,2,0], 100));