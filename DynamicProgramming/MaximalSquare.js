var maximalSquare = function(matrix) {
    let rDir = [0, 1, 1];
    let cDir = [1, 0, 1];
    var memoise = new Array(matrix.length).fill(0).map(()=>new Array(matrix[0].length).fill(0));

    for (let i = matrix.length - 1; i >= 0; i--) {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
            if (matrix[i][j] == "1") {
                var isSquare = true
                var squareNum = 0;
                var first = true;
                for (let k = 0; k < 3; k++) {
                    let r = i + rDir[k];
                    let c = j + cDir[k];                    
                    if (r >=  0 && r < matrix.length && c >= 0 && c < matrix[i].length && matrix[r][c] == "1") {
                        if (first) {
                            squareNum = memoise[r][c];
                            first = false;
                        } else {
                            if (squareNum > memoise[r][c]) {
                                squareNum = memoise[r][c]
                            }
                        }
                    } else {
                        isSquare = false;
                    }
                }
                if (isSquare) {
                    memoise[i][j] = squareNum + 1;
                } else {
                    memoise[i][j] = 1;
                }
            }
        }
    }
    var ans = 0;
    for (let i = 0; i < memoise.length; i ++) {
        for (let j = 0; j < memoise[i].length; j++) {
            if (ans < memoise[i][j]) {
                ans = memoise[i][j];
            }
        }
    }
    return Math.pow(ans, 2);
};

console.log(maximalSquare([["1","1","1","1","0"],["1","1","1","1","0"],["1","1","1","1","1"],["1","1","1","1","1"],["0","0","1","1","1"]]));