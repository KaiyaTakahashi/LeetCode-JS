var singleNumber = function(nums) {
    var one = 0;
    var two = 0;
    for (let i = 0; i < nums.length; i++) {
        two = two ^ (one & nums[i]);
        one = one ^ nums[i];
        var notThree = ~(two & one);
        one = notThree & one;
        two = notThree & two;
    }
    return one;
};

console.log(singleNumber([0,1,0,1,0,1,99]));