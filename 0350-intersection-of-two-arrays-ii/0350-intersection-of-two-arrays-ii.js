/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    //!Follow up if the array is sorted
    nums1 = nums1.sort((a,b)=>a-b)
    nums2 = nums2.sort((a,b)=>a-b)
    console.log(nums1)
    console.log(nums2)
    //
    let res = []
    let p1 = 0
    let p2 = 0
    while(p1 < nums1.length && p2 < nums2.length){
        if(nums1[p1]==nums2[p2]){
            res.push(nums1[p1])
            p1++
            p2++
        }
        if(nums1[p1] < nums2[p2]){
            p1++
        }
        else if(nums2[p2] < nums1[p1]){
            p2++
        }
    }
    return res
};