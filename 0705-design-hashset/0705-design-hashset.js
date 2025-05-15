var MyHashSet = function() {
    this.buckets = 1000
    this.storage = new Array(this.buckets).fill(null)
};

var Node = function(key,next=null) {
    this.val = key
    this.next = next
};

MyHashSet.prototype.hash = function(key) {
    return key % this.buckets
};

MyHashSet.prototype.add = function(key) {
    let i = this.hash(key)
    let newNode = new Node(key)
    let current = this.storage[i]
    while (current) {
        if (current.val === key) return // Already present
        current = current.next
    }
        //we already have a head
        let head = this.storage[i]
        newNode.next = head
        head = newNode
        this.storage[i] = head
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let i = this.hash(key)
    let dummyNode = new Node(-1)
    dummyNode.next = this.storage[i]
    if(!this.storage[i])return false
    let prev = dummyNode
    let current = dummyNode.next
    while(current){
        if(current.val == key){
            prev.next = current.next
            
        }
        prev = current
        current = current.next
    }
    this.storage[i] = dummyNode.next

};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let i = this.hash(key)
    let current = this.storage[i]
    while(current){
        if(current.val == key) return true
        current = current.next
    }
    return false
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */