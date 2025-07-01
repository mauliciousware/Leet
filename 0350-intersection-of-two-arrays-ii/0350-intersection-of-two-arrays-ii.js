var intersect = function(nums1, nums2) {
    let res = [];
    
    // Always use the shorter array to build the hashmap
    if (nums2.length > nums1.length) {
        return intersect(nums2, nums1);
    }

    let hashMap = new Map();

    for (let i = 0; i < nums1.length; i++) {
        if (hashMap.has(nums1[i])) {
            hashMap.set(nums1[i], hashMap.get(nums1[i]) + 1);
        } else {
            hashMap.set(nums1[i], 1);
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (hashMap.has(nums2[i])) {
            res.push(nums2[i]);
            hashMap.set(nums2[i], hashMap.get(nums2[i]) - 1);
            if (hashMap.get(nums2[i]) === 0) {
                hashMap.delete(nums2[i]);
            }
        }
    }

    return res;
};
