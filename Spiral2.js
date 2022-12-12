var generateMatrix = function(n) {
    const rDir = [0, 1, 0, -1];
    const cDir = [1, 0, -1, 0];
    var ans = new Array();
    var isVisited = new Array();
    for (let i = 0; i < n; i++) {
        var temp = [];
        var tempBool = [];
        for (let j = 0; j < n; j++) {
            temp.push(0);
            tempBool.push(false);
        }
        isVisited.push(tempBool);
        ans.push(temp);
    }
    var current = 1;
    var pos = [0, 0];
    var dirNum = 0;
    while (current <= Math.pow(n, 2)) {
        ans[pos[0]][pos[1]] = current;
        isVisited[pos[0]][pos[1]] = true;
        if (pos[0] + rDir[dirNum] >= 0 && pos[0] + rDir[dirNum] < n && pos[1] + cDir[dirNum] >= 0 && pos[1] + cDir[dirNum] < n) {
            if (isVisited[pos[0] + rDir[dirNum]][pos[1] + cDir[dirNum]] == true) {
                dirNum += 1;
                if (dirNum == 4) {
                    dirNum = 0;
                }
            }
        } else {
            dirNum += 1;
            if (dirNum == 4) {
                dirNum = 0;
            }
        }
        pos[0] += rDir[dirNum];
        pos[1] += cDir[dirNum];
        current += 1;
    }
    return ans;
};

console.log(generateMatrix(1));