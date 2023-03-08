var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort(function(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] > b[1]) ? -1 : 1;
        }
    });
    var index = 0;
    var ans = 0;
    while (truckSize > 0 && index < boxTypes.length) {
        if (truckSize >= boxTypes[index][0]) {
            truckSize -= boxTypes[index][0];
            ans += boxTypes[index][1] * boxTypes[index][0];
        } else {
            ans += boxTypes[index][1] * truckSize;
            return ans;
        }
        index += 1;
    }
    return ans;
};

console.log(maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], 33));