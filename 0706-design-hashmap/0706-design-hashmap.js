var Node = function(key,value,next=null) {
    this.key = key
    this.value = value
    this.next = null
};

var MyHashMap = function() {
    this.buckets = 1000
    this.storage = new Array(this.buckets)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.hash1 = function(key) {
    return key % this.buckets
};

MyHashMap.prototype.put = function(key, value) {
    let i = this.hash1(key)

    let newNode = new Node(key,value)
    //If not present add
    if(!this.storage[i]){
        this.storage[i] = newNode
    }
    let current = this.storage[i] // head
    while(current){
        //if present override
        if(current.key === key){

            current.value = newNode.value
            return
        }
        current = current.next
    }

        let head = this.storage[i]
        newNode.next = head
        head = newNode
         this.storage[i] = newNode

};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let i = this.hash1(key)
    if(!this.storage[i])return -1
    let head = this.storage[i]
    let current = head
    while(current){
        if(current.key === key) return current.value
        current = current.next
    }
    return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let i = this.hash1(key)
    let dummyNode = new Node(0,0)
    if(!this.storage[i]) return -1
    dummyNode.next = this.storage[i]
    let current = dummyNode.next
    let prev = dummyNode
    while(current){
        if(current.key === key){
            prev.next = current.next
            break
        }
        prev = current
        current = current.next
    }
    this.storage[i] = dummyNode.next
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */