var searchInsert = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    var middle = 0;
    while (start < end) {
        middle = Math.round((start + end) / 2);

        if (nums[middle] > target) {
            end = middle - 1;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            return middle;
        }
    }

    if (start > end) {
        if (nums[end] >= target) {
            return end;
        } else {
            return end + 1;
        }
    } else {
        if (nums[start] >= target) {
            return start;
        } else {
            return start + 1;
        }
    }
};


console.log(searchInsert([1,3,5,6], 7))