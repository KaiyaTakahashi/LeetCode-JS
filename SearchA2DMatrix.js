// var searchMatrix = function(matrix, target) {
//     var row = matrix.length;
//     var col = matrix[0].length;
//     var start = 0;
//     var end = (row * col) - 1;
//     var isFound = false;
//     while (start <= end && !isFound) {
//         const pivot = Math.floor((start + end) / 2);
//         var position = [0, 0];
//         if (pivot > row) {
//             const y = Math.floor(pivot / col);
//             const x = Math.floor(pivot % col);
//             position[0] = y;
//             position[1] = x;
//         } else {
//             position[1] = pivot;
//         }
//         console.log(position)
//         if (matrix[position[0]][position[1]] > target) {
//             end = pivot - 1;
//         } else if (matrix[position[0]][position[1]] < target) {
//             start = pivot + 1;
//         } else if (matrix[position[0]][position[1]] == target) {
//             isFound = true;
//         }
//     }
//     return isFound;
// };

var searchMatrix = function(matrix, target) {
    var isFound = false
    var row = 0;
    while (!isFound && row < matrix.length) {
        var start = 0;
        var end = matrix[row].length;
        while (start <= end && !isFound) {
            const pivot = Math.floor((start + end) / 2);
            if (matrix[row][pivot] > target) {
                end = pivot - 1;
            } else if (matrix[row][pivot] < target) {
                start = pivot + 1;
            } else if (matrix[row][pivot] == target) {
                isFound = true
            } else if (matrix[row][pivot] == undefined) {
                start = 1;
                end = 0;
            }
        }
        row += 1;
    }
    return isFound;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 111))