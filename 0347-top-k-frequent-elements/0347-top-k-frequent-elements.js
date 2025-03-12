var topKFrequent = function(nums, k) {
    let hashMap = new Map()
    let ans = []
    for(let i =0;i<nums.length;i++){
        if(hashMap.has(nums[i])){
            hashMap.set(nums[i],hashMap.get(nums[i])+1)
        }
        else{
            hashMap.set(nums[i],1)
        }
    }
    let bucket = Array.from({length:nums.length+1},()=>[]);


    for(let [num,freq] of hashMap.entries()){
        bucket[freq].push(num)
    }
    //its already sorted
    for(let i=bucket.length-1;i>=0 && ans.length<k;i--){
        for(num of bucket[i]){
            ans.push(num)
            if(ans.length === k ) return ans
        }
    }
};