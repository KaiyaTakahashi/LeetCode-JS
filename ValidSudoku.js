// Not done

var isValidSudoku = function(board) {
    function checkOneGrid(xNum, yNum) {
        var set = new Set();
        var count = 0;
        for (var i = xNum; i < xNum + 3; i++) {
            for (var j = yNum; j < yNum + 3; j++) {
                if (board[i][j] != ".") {
                    count += 1;
                    set.add(board[i][j]);
                }
            }
        }
        return set.size == count;
    }
    function checkColum() {
        var isValid = true;
        for (let i = 0; i < 9; i++) {
            var set = new Set();
            var count = 0;
            for (let j = 0; j < 9; j++) {
                if (board[j][i] != ".") {
                    count += 1;
                    set.add(board[j][i]);
                }
            }
            if (set.size != count) {
                isValid = false
            }
        }
        return isValid;
    }
    function checkRow() {
        var isValid = true;
        for (let i = 0; i < 9; i++) {
            var set = new Set();
            var count = 0;
            for (let j = 0; j < 9; j++) {
                if (board[i][j] != ".") {
                    count += 1;
                    set.add(board[i][j]);
                }
            }
            if (set.size != count) {
                isValid = false;
            }
        }
        return isValid;
    }
    var ans = true;
    for (let x = 0; x < 9; x = x + 3) {
        for (let y = 0; y < 9; y = y + 3) {
            if (ans) {
                ans = checkOneGrid(x, y);
            }
            if (ans) {
                ans = checkColum();
            }
            if (ans) {
                ans = checkRow();
            }
        }
    }
    return ans;
};

console.log(isValidSudoku([[".",".","4",".",".",".","6","3","."],[".",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".","9","."],[".",".",".","5","6",".",".",".","."],["4",".","3",".",".",".",".",".","1"],[".",".",".","7",".",".",".",".","."],[".",".",".","5",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]]));