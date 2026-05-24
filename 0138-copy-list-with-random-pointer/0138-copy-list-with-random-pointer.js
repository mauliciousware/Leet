var copyRandomList = function(head) {
    if (!head) return null;
    
    let map = new Map();
    let current = head;
    
    // First pass: create copy nodes without linking next/random
    while (current) {
        map.set(current, new _Node(current.val, null, null));
        current = current.next;
    }
    
    // Second pass: assign next and random pointers using the map
    current = head;
    while (current) {
        let copy = map.get(current);
        copy.next = map.get(current.next) || null;
        copy.random = map.get(current.random) || null;
        current = current.next;
    }
    
    return map.get(head);
};