// Not done

var rotate = function(matrix) {
    var move = matrix.length;
    var current = [0, 0];
    while (move > 1) {
        // To the right and down
        var chache = new Array(move - 1).fill(0);
        var movement = [move - 1, 0];
        var chacheIndex = 0;
        var isRight = true;
        while(chacheIndex > chache.length) {
            if (isRight) {
                chache[chacheIndex] = matrix[current[0] + movement[0]][current[1] + movement[1]];
                matrix[current[0] + movement[0]][current[1] + movement[1]] = matrix[current[0]][current[1]];
            } else {

            }
            movement[0] -= 1;
            movement[1] += 1;
            if (movement[0] == 0) {
                isRight = false;
            }
        }
        // To the left and up
        move -= 2;
    }
    console.log(matrix);
};

console.log(rotate());