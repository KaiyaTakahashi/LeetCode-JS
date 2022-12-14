var fourSumCount = function(nums1, nums2, nums3, nums4) {
    var dic = {};
    for (let i = 0; i < nums4.length; i++) {
        for (let j = 0; j < nums3.length; j++) {
            if (dic[nums4[i] + nums3[j]] == undefined) {
                dic[nums4[i] + nums3[j]] = 1;
            } else {
                dic[nums4[i] + nums3[j]] += 1;
            }
        }
    }
    var ans = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (dic[-(nums1[i] + nums2[j])]) {
                ans += dic[-(nums1[i] + nums2[j])];
            }
        }
    }
    return ans;
};

console.log(fourSumCount([1,2],  [-2,-1], [-1,2], [0,2]))