// Not done

var rotate = function(matrix) {
    const rDir = [0, 1, 0, -1];
    const cDir = [1, 0, -1, 0];
    var count = 0;
    var isVisited = new Array();
    for (let i = 0; i < matrix.length; i++) {
        var tempBool = [];
        for (let j = 0; j < matrix.length; j++) {
            tempBool.push(false);
        }
        isVisited.push(tempBool);
    }
    var pos = [0, 0];
    var dirNum = 0;

    var queue = [];
    var iteration = matrix.length - 1;
    var columTracker = 0;
    while (iteration > 1) {
        for (let i = iteration; i > 0; i--) {
            queue.push(matrix[i][columTracker]);
        }
        while (queue.length != 0) {
            console.log(queue)
            queue.push(matrix[pos[0]][pos[1]]);
            matrix[pos[0]][pos[1]] = queue.shift()
            isVisited[pos[0]][pos[1]] = true;
            if (pos[0] + rDir[dirNum] >= 0 && pos[0] + rDir[dirNum] < matrix.length && pos[1] + cDir[dirNum] >= 0 && pos[1] + cDir[dirNum] < matrix.length) {
                if (isVisited[pos[0] + rDir[dirNum]][pos[1] + cDir[dirNum]] == true) {
                    dirNum += 1;
                    if (dirNum == 4) {
                        dirNum = 0;
                        queue = [];
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
            console.log(matrix)
        }
        columTracker += 1;
        iteration -= 1;
    }
    return queue;
};

console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));