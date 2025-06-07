var isValidBST = function(root,min= -Infinity,max=Infinity) {
    //baseCase
    if(!root)return true

    if(!(min < root.val && root.val < max))
    {
       return false 
    }
    let left = isValidBST(root.left,min,root.val)
    if (!left) return false //conditional recursion do not execute right if we found a breach in left
    let right = isValidBST(root.right,root.val,max)
    return left && right
};  




