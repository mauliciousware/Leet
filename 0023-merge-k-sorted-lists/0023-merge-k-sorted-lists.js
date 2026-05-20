var mergeKLists = function(lists) {
    const nodes = [];

    // Push all nodes into the array
    for (let list of lists) {
        while (list) {
            nodes.push(list);
            list = list.next;
        }
    }

    // Sort the nodes by their values
    nodes.sort((a, b) => a.val - b.val);

    // Reconstruct the sorted linked list
    let dummy = new ListNode(-1);
    let current = dummy;
    for (let node of nodes) {
        current.next = node;
        current = current.next;
    }

    if (current) current.next = null; // Terminate last node

    return dummy.next;
};
