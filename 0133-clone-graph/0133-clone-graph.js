/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

var cloneGraph = function(node) {
    if (!node) return null;

    let map = new Map(); // old node -> new node
    let queue = [node];
    map.set(node, new Node(node.val));

    while (queue.length) {
        let current = queue.shift();

        for (let neighbor of current.neighbors) {
            if (!map.has(neighbor)) {
                // Clone neighbor if not seen
                map.set(neighbor, new Node(neighbor.val));
                queue.push(neighbor);
            }
            // Link current’s clone to neighbor’s clone
            map.get(current).neighbors.push(map.get(neighbor));
        }
    }

    return map.get(node);
};
