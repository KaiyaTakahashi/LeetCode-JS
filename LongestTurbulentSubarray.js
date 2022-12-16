var maxTurbulenceSize = function(arr) {
    if (arr.length == 0) {
        return 0;
    } else if (arr.length == 1) {
        return 1;
    }
    var maxDp = new Array(arr.length);
    var comDp = new Array(arr.length);
    var max = 0;
    maxDp[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            comDp[i] = ">";
            if (comDp[i - 1] != comDp[i]) {
                maxDp[i] = maxDp[i - 1] + 1;
            } else {
                maxDp[i] = 2;
            }
        } else if (arr[i - 1] < arr[i]) {
            comDp[i] = "<";
            if (comDp[i - 1] != comDp[i]) {
                maxDp[i] = maxDp[i - 1] + 1;
            } else {
                maxDp[i] = 2;
            }
        } else {
            maxDp[i] = 1;
        }
        if (max < maxDp[i]) {
            max = maxDp[i];
        }
    }
    return max;
};

console.log(maxTurbulenceSize([4,8,12,16]))