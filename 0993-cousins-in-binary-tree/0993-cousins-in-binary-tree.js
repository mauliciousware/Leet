var isCousins = function(root, x, y) {
    if(!root)return false
    if(root.val == x || root.val == y)return false

    let queue = [[root,null]] //[child,parent] in a queue
            let parentX = null
            let parentY = null
    while(queue.length){
        let size = queue.length
        parentX = null
        parentY = null
        for(let i=0;i<size;i++){
            let [current,parent] = queue.shift()
            
            if(current.val==x){
                parentX =parent
            }
            if(current.val ==y){
                parentY =parent
            }


            if(current.left){
                //Pushing [next left,current as parent]
                queue.push([current.left,current])
            }
            if(current.right){
                queue.push([current.right,current])

            }
        }
        if(parentX && parentY) {
            if(parentX != parentY) return true
        }        
    }
    return false
};