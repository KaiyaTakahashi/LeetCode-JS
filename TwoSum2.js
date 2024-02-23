var twoSum = function(numbers, target) {
    var first = 0;
    var last = numbers.length - 1;
    while (true) {
        if (numbers[first] + numbers[last] == target) {
            return [first +1, last +1];
        } else if (target - numbers[first] > numbers[last]) {
            first += 1;
        } else if (target - numbers[last] < numbers[first]) {
            last -= 1;
        }
    }
};

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([2,3,4],6));
console.log(twoSum([-1, 0],-1));