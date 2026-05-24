/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if(!head) return null
    // 1. Insert copy intertwined
    let current = head
    while(current){
        let copy = new _Node(current.val,null,null)
        copy.next = current.next
        current.next = copy
        current = current.next.next
    }

    // 2. Connect Random Pointers
    current = head
    while(current){
        current.next.random = current.random ? current.random.next : null;
        current = current.next.next
    }
    current = head
    // 3. Connect Next Pointers (FIXED)
    let dummyNode = new _Node(-1, null, null);
    let temp = dummyNode;
    current = head;
    
    while (current) {
        temp.next = current.next;    // Add copy to result
        temp = temp.next;            // Move temp forward
        current.next = current.next.next; // Restore original's next
        current = current.next;      // Move to next original
    }
    
    return dummyNode.next;

};