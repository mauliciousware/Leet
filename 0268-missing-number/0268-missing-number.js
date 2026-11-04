/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let res = 0
    let temp = new Array(nums.length+1).fill(0)
    //starts with zero

    for(let i=0;i<nums.length;i++){
        temp[nums[i]] = 1
    }

    for(let i=0;i<temp.length;i++){
        if(temp[i]==0){
            res = i
        }
    }

    return res



};