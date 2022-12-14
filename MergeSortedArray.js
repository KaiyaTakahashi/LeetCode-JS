var merge = function(nums1, m, nums2, n) {
    var pointer1 = 0;
    var pointer2 = 0;
    var temp = 0;
    while (pointer1 < nums1.length && pointer2 < nums2.length) {
        if (pointer1 >= m) {
            nums1[pointer1] = nums2[pointer2];
            pointer2 += 1;
            pointer1 += 1;
        } else if (nums1[pointer1] <= nums2[pointer2]) {
            pointer1 += 1;
        } else {
            temp = nums1[pointer1];
            nums1[pointer1] = nums2[pointer2];
            nums2[pointer2] = temp;
            for (let i = 0; i < nums2.length - 1; i++) {
                if (nums2[i] > nums2[i + 1]) {
                    temp = nums2[i]
                    nums2[i] = nums2[i + 1];
                    nums2[i + 1] = temp;
                }
            }
        }
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))