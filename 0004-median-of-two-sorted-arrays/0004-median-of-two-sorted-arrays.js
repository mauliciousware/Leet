var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if(nums1.length > nums2.length){
        return findMedianSortedArrays(nums2, nums1);
    }
    
    let x = nums1;
    let y = nums2;
    let n1 = x.length;
    let n2 = y.length;
    
    let low = 0;
    let high = n1; // partition index can be from 0 to n1
    
    while(low <= high){
        let partX = Math.floor((low + high) / 2);
        let partY = Math.floor((n1 + n2 + 1) / 2) - partX; // +1 handles odd/even
        
        const L1 = partX === 0 ? -Infinity : x[partX - 1];
        const R1 = partX === n1 ? Infinity : x[partX];
        const L2 = partY === 0 ? -Infinity : y[partY - 1];
        const R2 = partY === n2 ? Infinity : y[partY];
        
        if(L1 <= R2 && L2 <= R1){
            // Found correct partition
            if((n1 + n2) % 2 === 0){
                // Even total length
                return (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
            } else {
                // Odd total length
                return Math.max(L1, L2);
            }
        }
        else if(L1 > R2){
            // Move left in nums1
            high = partX - 1;
        }
        else {
            // Move right in nums1
            low = partX + 1;
        }
    }
    
    return 0; // Should never reach here if input is valid
};