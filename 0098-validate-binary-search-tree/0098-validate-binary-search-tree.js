var isValidBST = function(root) {
    function validate(node, min, max) {
        if (node === null) return true;
        
        if (node.val <= min || node.val >= max) {
            return false;
        }
        
        const left = validate(node.left, min, node.val);
        const right = validate(node.right, node.val, max);
        
        return left && right;
    }
    
    return validate(root, -Infinity, Infinity);
};