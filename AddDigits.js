var addDigits = function(num) {
    if (num < 10) {
        return num;
    } else {
        var number = 0;
        while (num != 0) {
            number += num % 10;
            num = Math.floor(num/10);
        }
        return addDigits(number)
    }
};

console.log(addDigits(0));