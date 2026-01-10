/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = []
    let dequeue = []

    for(let i = 0;i<nums.length;i++){
        
        let windowStart = i - k + 1

        if(dequeue.length >0 && dequeue[0] < windowStart){
            dequeue.shift() //popFront()
        }

        while(dequeue.length){
            let lastIndex = dequeue[dequeue.length-1]

            if(nums[lastIndex] <= nums[i]) dequeue.pop() // popBack()
            else{
                break
            }
        }
        
        dequeue.push(i)

        if(i >= k-1){
            res.push(nums[dequeue[0]])
        }
    }
    return res
};