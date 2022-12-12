var spiralOrder = function(matrix) {
    const rDir = [0, 1, 0, -1];
    const cDir = [1, 0, -1, 0];
    var isVisited = [];
    for (let i = 0; i < matrix.length; i++) {
        var temp = [];
        for (let j = 0; j < matrix[i].length; j++) {
            temp.push(false);
        }
        isVisited.push(temp);
    }
    var next = 0;
    var count = 0;
    var ans = [];
    var current = [0, 0];
    const nodeNum = matrix.length * matrix[0].length;
    while (count < nodeNum) {
        ans.push(matrix[current[0]][current[1]]);
        isVisited[current[0]][current[1]] = true;
        if (current[0] + rDir[next] >= 0 && current[0] + rDir[next] < matrix.length && current[1] + cDir[next] >= 0 && current[1] + cDir[next] < matrix[0].length) {
            if (isVisited[current[0] + rDir[next]][current[1] + cDir[next]] == true) {
                next += 1;
                if (next == 4) {
                    next = 0;
                }
            } 
        } else {
            next += 1;
            if (next == 4) {
                next = 0;
            }
        }
        current[0] += rDir[next];
        current[1] += cDir[next];
        count += 1;
    }
    return ans;
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))