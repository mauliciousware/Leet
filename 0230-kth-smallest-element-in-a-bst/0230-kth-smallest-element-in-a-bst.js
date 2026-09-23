var kthSmallest = function(root, k) {
    let res = 0
    let current = root

    while (current && k !== 0) {

        // CASE 1: No left subtree
        // Process current node directly
        if (current.left === null) {
            k--

            if (k === 0) {
                res = current.val
            }

            current = current.right
        }

        // CASE 2 & CASE 3: Left subtree exists
        else if (current.left !== null) {

            let predecessor = current.left

            while (
                predecessor.right !== null &&
                predecessor.right !== current
            ) {
                predecessor = predecessor.right
            }

            // CASE 2: First time visiting current
            // Create thread and go left
            if (predecessor.right === null) {
                predecessor.right = current
                current = current.left
            }

            // CASE 3: Coming back after left subtree
            // Remove thread and process current
            else if (predecessor.right === current) {
                predecessor.right = null

                k--

                if (k === 0) {
                    res = current.val
                }

                current = current.right
            }
        }
    }

    return res
}