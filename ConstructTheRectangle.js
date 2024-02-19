var constructRectangle = function(area) {
    var largest = Math.floor(area / 2);
    var ans = [1, area];
    if (area == 1) {
        return [1, 1];
    }
    while(largest != 1) {
        if (area % largest == 0) {
            if (Math.abs(ans[1] - ans[0]) > Math.abs(largest - area/largest)) {
                ans = [largest, area/largest];
            }
        }
        largest -= 1;
    }
    var big = ans[0] > ans[1]? ans[0]: ans[1];
    var small =  ans[0] > ans[1]? ans[1]: ans[0];
    return [big, small];
};

console.log(constructRectangle(122122));