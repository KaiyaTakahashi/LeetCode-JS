var intervalIntersection = function(firstList, secondList) {
    var numArr = [];
    var abArr = [];
    var f = [];
    var s = [];
    console.log((firstList.length * 2) + (secondList.length * 2))
    while (numArr.length != (firstList.length * 2) + (secondList.length * 2)) {
        if (f.length == 0 && firstList.length != 0){
            f = firstList.shift();
        }
        if (s.length == 0 && secondList.length != 0) {
            s = secondList.shift();
        }
        if (f.length == 0) {
            while (s) {
                numArr.push(s.shift());
                abArr.push("B");
            }
        }
        if (s.length == 0) {
            while (f) {
                numArr.push(f.shift());
                abArr.push("A");
            }
        }
        while (f.length != 0 && s.length != 0) {
            if (f.length == 0) {
                numArr.push(s.shift());
                abArr.push("B");
            } else if (s.length == 0) {
                numArr.push(f.shift());
                abArr.push("A");
            } else if (f[0] > s[0]) {
                numArr.push(s.shift());
                abArr.push("B");
            } else if (s[0] > f[0]) {
                numArr.push(f.shift());
                abArr.push("A");
            } else {
                numArr.push(f.shift());
                abArr.push("A");
            }
        }
    }
    var isA = false;
    var isB = false;
    var ans = [];
    for (let i = 0; i < abArr.length; i++) {
        if (abArr[i] == "A") {
            if (isA) {
                isA = false;
            } else {
                isA = true;
            }
        } else {
            if (isB) {
                isB = false;
            } else {
                isB = true;
            }
        }
    }
    console.log(numArr)
    console.log(abArr);
};

console.log(intervalIntersection([[0,2],[5,10],[13,23],[24,25]],[[1,5],[8,12],[15,24],[25,26]]))