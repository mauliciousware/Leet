
var MyHashMap = function() {
    this.bucketElements = 1000
    this.bucket = 1000
    this.storage = new Array(this.bucket)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.hash1 = function(key) {
    return key % this.bucket
};

MyHashMap.prototype.hash2 = function(key) {
    return Math.floor(key / this.bucket)
};

MyHashMap.prototype.put = function(key, value) {
    let i = this.hash1(key)
    //If we already have it , then override the value
    if(!this.storage[i]){
        //if not create array (secondary)
        this.storage[i] = new Array(this.bucketElements).fill(-1)
    }
    //put the value for [hash1][hash2] = value  
    this.storage[i][this.hash2(key)] = value
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    if(!this.storage[this.hash1(key)]) return -1
    return this.storage[this.hash1(key)][this.hash2(key)]
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let i = this.hash1(key)
    if(!this.storage[i]) return false
    this.storage[i][this.hash2(key)] = -1
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */